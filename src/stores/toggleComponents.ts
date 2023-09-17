import { defineStore } from 'pinia'
import { ref } from 'vue'

const toggleComponents = 'toggleComponents'
export const useToggleComponents = defineStore(toggleComponents, () => {

  const previewText = ref(false)
  const togglePreviewText = () => previewText.value = !previewText.value

  const configComponent = ref(false)
  const toggleConfigComponent = () => configComponent.value = !configComponent.value

  const globalLoading = ref(false)
  const toggleGlobalLoading = (state?: boolean) => {
    state ? globalLoading.value = state : globalLoading.value = !globalLoading.value
  }

  return {
    previewText,
    togglePreviewText,
    configComponent,
    toggleConfigComponent,
    globalLoading,
    toggleGlobalLoading
  }
})
