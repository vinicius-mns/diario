import { defineStore } from "pinia"
import { reactive } from "vue"

const style = 'style'
export const useStyle = defineStore(style, () => {

  const value = reactive({
    textColor: 'black',
    especialColor: 'blue',
    pageColor: 'rgb(229, 237, 245)',
    baseColor: 'white',
    boxShadow: '0 0 4px 1px rgba(126, 126, 126, 0.3)',
    borderRadius: '16px',
  })

  return {
    value,
  }
})