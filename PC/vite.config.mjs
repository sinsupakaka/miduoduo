import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5174,       // 指定端口
  },
  base: "./",
  build: {
    assetsInlineLimit: 0,
  },
})
