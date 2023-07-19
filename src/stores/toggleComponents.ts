import { defineStore } from 'pinia'
import { ref } from 'vue'

const toggleComponents = 'toggleComponents'
export const useToggleComponents = defineStore(toggleComponents, () => {

  const previewText = ref(false)
  const togglePreviewText = () => previewText.value = !previewText.value

  return {
    previewText,
    togglePreviewText,
  }
})
