// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme"
import Notel from "notel-ui"
export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    app.use(Notel)
  }
}
