import { defineStore } from "pinia"
import { ref } from "vue"

export const useMarkdownStore = defineStore('markdownStore', () => {
  
  const text = ref('')

  const getValue = () => {
    return text.value
  }

  const editValue = (newValue: string) => {
    console.log('text', text.value)
    text.value = newValue
  }

  return {
    getValue,
    editValue,
  }
})