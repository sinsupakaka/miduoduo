import { defineConfig } from 'vite'
import uniPlugin from '@dcloudio/vite-plugin-uni'

export default defineConfig({
  plugins: [ (uniPlugin.default ? uniPlugin.default() : uniPlugin()) ],
  base: "./",
  build: {
    assetsInlineLimit: 0,
  },
})
