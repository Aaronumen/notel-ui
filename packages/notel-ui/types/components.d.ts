import NotelButton from "../components/notel-button/index.vue"
import NotelInput from "../components/notel-input/index.vue"
import NotelTsx from "../components/notel-tsx/index"
import NotelSpace from "../components/notel-space/index.vue"

declare module "vue" {
  export interface GlobalComponents {
    NotelButton: typeof NotelButton
    NotelInput: typeof NotelInput
    NotelTsx: typeof NotelTsx
    NotelSpace: typeof NotelSpace
  }
}
