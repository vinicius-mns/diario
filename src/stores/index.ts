import { reactive } from "vue"
import { defineStore } from "pinia"
import { useLocalCards, useStyle } from "./local"
import { useRemoteCards, useRemoteUser } from "./remote"
import { useTopbarWidget } from "./widgets"

export const useStore = defineStore('useStore', () => {

  const params: { value: 'remote' | 'local' } = reactive({
    value: 'local'
  })

  const use = {
    local: {
      style: useStyle,
      cards: useLocalCards,
    },
    remote: {
      cards: useRemoteCards,
      user: useRemoteUser,
    },
    widget: {
      topbar: useTopbarWidget,
    }
  }

  return {
    use,
    params
  }
})