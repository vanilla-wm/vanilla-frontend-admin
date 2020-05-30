import ApiClient from './ApiClient'

export default new ApiClient({
  url: 'api.dev',
  getToken: () => 'token',
})