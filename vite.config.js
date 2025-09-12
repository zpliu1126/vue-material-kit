import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

//fake mock
import { viteMockServe } from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteMockServe({
      mockPath: 'mock',
      localEnabled: true, //开发环境是否启用mock
      prodEnabled:true, //生产环境是否启用mock
      injectCode: ` import { setupProdMockServer } from './mockProdServer'; setupProdMockServer(); `,  //若prodEnabled开启后将生产环境下注入该代码
      logger: true
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // server: {
  //   host: '0.0.0.0'
  // }
});
