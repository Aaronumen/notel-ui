import * as components from "./index"

declare module "vue" {
  export interface GlobalComponents {
    NotelButton: typeof components.NotelButton
    NotelInput: typeof components.NotelInput
    NotelSpace: typeof components.NotelSpace
  }
}
export {}
