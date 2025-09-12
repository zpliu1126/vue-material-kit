import { MockMethod } from 'vite-plugin-mock'

export default [
  {
    url: '/api/user',
    method: 'get',
    response: () => {
      return {
        code: 200,
        data: {
          name: 'John Doe',
          age: 30
        }
      }
    }
  }
] as MockMethod[]