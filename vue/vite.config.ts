import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from "@originjs/vite-plugin-federation"

const PORT = 3003;

// https://vite.dev/config/
export default defineConfig({
  build: {
    minify: false,
    cssCodeSplit: false,
    target: "esnext",
  },
  server: {
    port: PORT,
  },
  preview: {
    port: PORT,
  },
  plugins: [
    vue(),
    federation({
      name: "vue",
      filename: "remoteVue.js",
      exposes: {
        "./HelloWorld": "./src/components/HelloWorld.vue"
      },
      shared: ["vue"]
    })
  ]
})
