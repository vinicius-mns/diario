import { defineStore } from "pinia"
import { useStyle } from "./local"

export const useStore = defineStore('useStore', () => {

  const use = {
    local: {
      style: useStyle,
    }
  }

  return {
    use
  }
})