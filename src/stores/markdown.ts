import { defineStore } from "pinia"
import { ref } from "vue"

export const useMarkdownStore = defineStore('markdownStore', () => {
  
  const state = ref('')

  return {
    state,
  }
})