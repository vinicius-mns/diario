import { HandleLocalStorage } from "@/myLocalStorage/helper/HandleLocalStorage"

export type IStyle = {
  textColor: string,
  especialColor: string,
  pageColor: string,
  baseColor: string,
  boxShadow: string,
  borderRadius: string,
  darkMode: boolean,
  dateOnCard: boolean,
}

const initState: IStyle = {
  textColor: 'black',
  especialColor: 'rgb(82, 82, 199)',
  pageColor: 'rgb(229, 237, 245)',
  baseColor: 'white',
  boxShadow: '0 0 4px 1px rgba(126, 126, 126, 0.3)',
  borderRadius: '16px',
  darkMode: false,
  dateOnCard: false,
}

export const style_localStorage = new HandleLocalStorage('style', initState)