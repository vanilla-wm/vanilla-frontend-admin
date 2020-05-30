import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { split } from 'apollo-link'
import { setContext } from 'apollo-link-context'
import { createHttpLink } from 'apollo-link-http'
import { getMainDefinition } from 'apollo-utilities'
import { WebSocketLink } from 'apollo-link-ws'
import fetch from 'isomorphic-fetch'
import ws from 'ws'

type Props = {
  url: string
  getToken?: () => string | null
}

export default class {
  private readonly authLink

  private readonly wsLink

  private readonly httpLink

  private readonly url: string

  private readonly getToken: () => string

  private readonly client: ApolloClient<object>

  constructor({ url, getToken }: Props) {
    this.authLink = this.getAuthLink()
    this.wsLink = this.getWsLink()
    this.getToken = getToken || (() => null)

    this.url = url

    this.httpLink = createHttpLink({
      uri: `https://${this.url}`,
      fetch,
      credentials: 'include',
    })

    this.client = new ApolloClient({
      link: this.getLink(),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
          errorPolicy: 'ignore',
        },
        query: {
          fetchPolicy: 'network-only',
          errorPolicy: 'all',
        },
        mutate: {
          errorPolicy: 'all',
        },
      },
    })
  }

  private getAuthLink = () =>
    setContext((_, { headers }) => {
      const token = this.getToken()

      return {
        headers: {
          ...headers,
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
      }
    })

  private getLink = () =>
    split(
      // split based on operation type
      ({ query }) => {
        const definition = getMainDefinition(query)

        return (
          definition.kind === 'OperationDefinition' &&
          definition.operation === 'subscription'
        )
      },
      this.wsLink,
      this.authLink.concat(this.httpLink)
    )

  private getWsLink = () => {
    const webSocket = new WebSocketLink({
      uri: `wss://${this.url}`,
      webSocketImpl: ws,
      options: {
        timeout: 5000,
        lazy: true,
        connectionCallback: (error) => {
          if (error) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            webSocket.subscriptionClient.close(false, false)
          }
        },
        reconnect: true,
        reconnectionAttempts: 5,
        connectionParams: async () => {
          const token = this.getToken()

          return {
            headers: {
              ...(token ? { Authorization: `Bearer ${token}` } : {}),
            },
          }
        },
      },
    })
    return webSocket
  }

  public getClient = () => {
    return this.client
  }
}
