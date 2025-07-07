import path from "path"
import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import AutoImport from "unplugin-auto-import/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ["vue"],
      dts: "src/auto-imports.d.ts"
    })
  ],
  resolve: {
    alias: {
      "@core": path.resolve(__dirname, "./src")
    }
  }
})
