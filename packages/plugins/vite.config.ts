import { defineConfig } from "vite"
import vitePluginDts from 'vite-plugin-dts'
// https://vitejs.dev/config/
export default defineConfig({
  plugins:[vitePluginDts({
    outputDir:'dist',
    staticImport:true,
    insertTypesEntry:true,
    exclude:['auto-imports.d.ts','components.d.ts']
  })],
  build: {
    assetsInlineLimit: 4096,
    lib: {
      entry: './index.ts',
      name: 'notel-plugins',
      fileName: (format) => `notel.plugins.${format}.js`
    },
  }
})
