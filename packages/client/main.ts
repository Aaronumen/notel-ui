import { createApp } from "vue"
import NotelUi from "@notel/notel-ui"
import "@notel/notel-ui/dist/style.css"
import App from "./App.vue"
const app = createApp(App)
app.use(NotelUi).mount("#app")
