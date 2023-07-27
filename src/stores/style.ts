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

  const darkMode = () => {
    value.textColor = 'white'
    value.especialColor = 'pink'
    value.pageColor = '#24292e'
    value.baseColor = '#1f2428'
    value.boxShadow = '0 0 5px 0px rgba(0, 0, 0, 0.8)'
  }

  return {
    value,
    darkMode,
  }
})