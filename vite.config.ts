import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'
import DefineOptions from 'unplugin-vue-define-options'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    DefineOptions(),
    vue(),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/bem.scss";`
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src') 
    }
  }
})
