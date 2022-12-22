import NotelButton from "./components/notel-button/index.vue"
import NotelInput from "./components/notel-input/index.vue"
import NotelTsx from "./components/notel-tsx/index"
import NotelSpace from "./components/notel-space/index.vue"
import type { App } from "vue"

const NotelUi = {
  install: (app: App) => {
    app.component(NotelButton.name, NotelButton)
    app.component(NotelInput.name, NotelInput)
    app.component("NotelTsx", NotelTsx)
    app.component(NotelSpace.name, NotelSpace)
  }
}

export { NotelButton, NotelInput, NotelTsx, NotelSpace }

export default NotelUi
