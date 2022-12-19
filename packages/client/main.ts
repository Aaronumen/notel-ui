import { createApp } from "vue"
import NotelUi from "@notel/notel-ui"
import App from "./App.vue"
const app = createApp(App)
app.use(NotelUi).mount("#app")
