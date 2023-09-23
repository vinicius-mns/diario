import { style_localStorage, type IStyle } from "@/myLocalStorage"
import { defineStore } from "pinia"
import { reactive } from "vue"

const style = 'style'
export const useStyle = defineStore(style, () => {

  const localStorageStyle = style_localStorage

  const value: IStyle = reactive(localStorageStyle.read)

  const _update = () => {
    localStorageStyle.update(value)
  }

  const _lightMode = () => {
    value.textColor = 'black'
    value.pageColor = 'rgb(229, 237, 245)'
    value.baseColor = 'white'
    value.boxShadow = '0 0 4px 1px rgba(126, 126, 126, 0.3)'
    value.darkMode = false

    _update()
  }

  const _darkMode = () => {
    value.textColor = 'white'
    value.pageColor = '#24292e'
    value.baseColor = '#1f2428'
    value.boxShadow = '0 0 5px 0px rgba(0, 0, 0, 0.8)'
    value.darkMode = true

    _update()
  }

  const toggleDarkMode = () => {
    value.darkMode
      ? _lightMode()
      : _darkMode()
  }

  const toggleDateOnCard = () => {
    value.dateOnCard = !value.dateOnCard

    _update()
  }

  const changeEspecialColor = (newColor: string) => {
    value.especialColor = newColor

    _update()
  }

  return {
    value,
    toggleDarkMode,
    toggleDateOnCard,
    changeEspecialColor,
  }
})