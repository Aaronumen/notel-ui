import { Directive, DirectiveBinding } from "vue"
export const focus: Directive = {
  mounted(el: HTMLElement) {
    el.focus()
  }
}
