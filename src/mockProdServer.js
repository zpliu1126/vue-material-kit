//  mockProdServer.ts
import { createProdMockServer } from 'vite-plugin-mock/es/createProdMockServer'

// 逐一导入mock.js文件
// 如果使用vite.mock.config.js，只需直接导入文件
// 可以使用 import.meta.glob功能来进行全部导入
import user from '../mock/user.mock'
export function setupProdMockServer() {
    createProdMockServer([...user])
}