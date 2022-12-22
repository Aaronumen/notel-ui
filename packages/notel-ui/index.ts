import NotelButton from "./components/notel-button/index.vue"
import NotelInput from "./components/notel-input/index.vue"
import NotelSpace from "./components/notel-space/index.vue"
import type { App } from "vue"

const NotelUi = {
  install: (app: App) => {
    app.component(NotelButton.name, NotelButton)
    app.component(NotelInput.name, NotelInput)
    app.component(NotelSpace.name, NotelSpace)
  }
}

export { NotelButton, NotelInput, NotelSpace }

export default NotelUi
