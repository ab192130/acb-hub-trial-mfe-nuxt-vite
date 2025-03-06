import { onBeforeMount } from "vue"
import { setActivePinia, createPinia } from "pinia"

export function useHostPinia() {
  onBeforeMount(() => {
    if (process.client) {
      console.log("RMT: init pinia store from host: ")
      // @ts-expect-error global pinia host
      setActivePinia(window.__mfeHostPinia || createPinia())
    }
  })
}
