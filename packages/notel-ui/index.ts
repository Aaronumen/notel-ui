import NotelButton from "./components/notel-button/index.vue"
import NotelInput from "./components/notel-input/index.vue"
import NotelTsx from "./components/notel-tsx/index"
import type { App } from "vue"

const NotelUi = {
  install: (app: App) => {
    app.component(NotelButton.name, NotelButton)
    app.component(NotelInput.name, NotelInput)
    app.component("NotelTsx", NotelTsx)
  }
}

export { NotelButton, NotelInput, NotelTsx }

export default NotelUi
