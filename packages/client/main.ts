import { createApp } from "vue"
import NotelUi from "notel-ui"
import "notel-ui/dist/style.css"
import * as directives from "@notel/plugins"
import App from "./App.vue"
const app = createApp(App)
for (const key in directives) {
  console.log(key)
  app.directive(key, (directives as any)[key])
}

app.use(NotelUi).mount("#app")
