import { defineStore } from "pinia"
import { reactive } from "vue"

export const useTopbarWidget = defineStore('topbarWidget', () => {

  const state = reactive({
    configComponent: {
      show: false,
      toggleShow: () => state.configComponent.show = !state.configComponent.show,
    },
  })


  return {
    state
  }
})