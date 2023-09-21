import { defineStore } from "pinia"
import { useToggleComponents } from "./toggleComponents"

export const useApi = defineStore('api', () => {

  const props = {
    loading: (state: boolean) => useToggleComponents().toggleGlobalLoading(state),
  }
})