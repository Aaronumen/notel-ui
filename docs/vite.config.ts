import { defineConfig } from "vite"
import vueJsx from "@vitejs/plugin-vue-jsx"
import { viteBuildLogTime } from "@notel/plugins"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx({})]
})
