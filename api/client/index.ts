import ApiClient from './ApiClient'
import getConfig from 'next/config'

export default new ApiClient({
  url: getConfig().publicRuntimeConfig.GRAPHQL_SERVER_URI,
}).getClient()
