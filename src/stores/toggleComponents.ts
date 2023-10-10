import { defineStore } from 'pinia'
import { reactive, ref } from 'vue'

const toggleComponents = 'toggleComponents'
export const useToggleComponents = defineStore(toggleComponents, () => {

  const textEditor = reactive({
    value: false,
    toggle: () => textEditor.value = !textEditor.value
  })

  const configComponent = ref(false)
  const toggleConfigComponent = () => configComponent.value = !configComponent.value

  const globalLoading = ref(false)
  const toggleGlobalLoading = (state?: boolean) => {
    state ? globalLoading.value = state : globalLoading.value = !globalLoading.value
  }

  return {
    textEditor,
    configComponent,
    toggleConfigComponent,
    globalLoading,
    toggleGlobalLoading
  }
})
