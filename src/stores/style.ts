import { HandleLocalStorage } from "@/utils"
import { defineStore } from "pinia"
import { reactive } from "vue"

const style = 'style'
export const useStyle = defineStore(style, () => {

  const initState = {
    textColor: 'black',
    especialColor: 'blue',
    pageColor: 'rgb(229, 237, 245)',
    baseColor: 'white',
    boxShadow: '0 0 4px 1px rgba(126, 126, 126, 0.3)',
    borderRadius: '16px',
    darkMode: false,
    dateOnCard: false,
  }

  const localStorageStyle = new HandleLocalStorage(style, initState)

  const value = reactive(localStorageStyle.read)

  const lightMode = () => {
    value.textColor = 'black'
    value.pageColor = 'rgb(229, 237, 245)'
    value.baseColor = 'white'
    value.boxShadow = '0 0 4px 1px rgba(126, 126, 126, 0.3)'
    value.darkMode = false

    localStorageStyle.update(value)
  }

  const darkMode = () => {
    value.textColor = 'white'
    value.pageColor = '#24292e'
    value.baseColor = '#1f2428'
    value.boxShadow = '0 0 5px 0px rgba(0, 0, 0, 0.8)'
    value.darkMode = true

    localStorageStyle.update(value)
  }

  const toggleTeme = () => {    
    if(value.darkMode){
      lightMode()
    } else if (!value.darkMode) {
      darkMode()
    }
  }

  const toggleDateOnCard = () => {
    value.dateOnCard = !value.dateOnCard
  }

  const changeEspecialColor = (newColor: string) => {
    value.especialColor = newColor

    localStorageStyle.update(value)
  }

  return {
    value,
    darkMode,
    lightMode,
    toggleTeme,
    toggleDateOnCard,
    changeEspecialColor,
  }
})