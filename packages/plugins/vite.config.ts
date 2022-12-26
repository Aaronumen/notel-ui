import { defineConfig } from "vite"
import vitePluginDts from "vite-plugin-dts"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vitePluginDts({
      outputDir: "dist",
      staticImport: true,
      insertTypesEntry: true
    })
  ],
  build: {
    assetsInlineLimit: 4096,
    lib: {
      entry: "./index.ts",
      name: "notel-plugins",
      fileName: format => `notel.plugins.${format}.js`,
    },
    rollupOptions:{
      external:['vite','vue/compiler-sfc'],
      output:{
        globals:{
          'vite':'vite',
          'vue/compiler-sfc':'vue/compiler-sfc'
        }
      }
    }
  }
})
