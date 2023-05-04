import { Directive, DirectiveBinding } from "vue"

export const lazy: Directive = {
  mounted(el: any, bind: DirectiveBinding) {
    const { src, root } = bind.value
    const options = {
      root,
      rootMargin: "0px",
      threshold: 1,
      trackVisibility: true,
      delay: 100
    }
    const callback = (entries: any, observer: any) => {
      entries.forEach((element: any) => {
        console.log("🚀 ~ file: lazy.ts:15 ~ callback ~ element:", element)
        if (element.isIntersecting) {
          console.log("全部进入", element.intersectionRatio)
          element.target.src = src
          observer.unobserve(el)
        }
        if (element.isVisible) {
          console.log("显示完全")
        }
      })
    }
    const observer = new IntersectionObserver(callback, options)
    observer.observe(el)
  }
}
