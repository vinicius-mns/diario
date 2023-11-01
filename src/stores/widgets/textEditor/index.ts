import { defineStore } from "pinia"
import { reactive } from "vue"

export const useTextEditorWidget = defineStore('TextEditorWidget', () => {

  const value = reactive({
    show: false
  })

  const set = {
    toggleShow: () => value.show = !value.show,
  }

  return {
    get: value,
    set
  }
})