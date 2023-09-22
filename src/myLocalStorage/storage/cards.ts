import type { ICard } from "@/interfaces"
import { HandleLocalStorage } from "@/myLocalStorage/helper/HandleLocalStorage"

const initState: ICard[] = [
  {
    content: 'card inicial',
    date: new Date().getTime()
  }
]

export const cards_localStorage = new HandleLocalStorage('cards', initState)