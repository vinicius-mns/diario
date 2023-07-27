import { defineStore } from 'pinia'
import { ref } from 'vue'

const toggleComponents = 'toggleComponents'
export const useToggleComponents = defineStore(toggleComponents, () => {

  const previewText = ref(false)
  const togglePreviewText = () => previewText.value = !previewText.value

  const configComponent = ref(true)
  const toggleConfigComponent = () => configComponent.value = !configComponent.value

  return {
    previewText,
    togglePreviewText,
    configComponent,
    toggleConfigComponent,
  }
})
