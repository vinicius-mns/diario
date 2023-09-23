import { HandleDate } from '@/utils'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import type { ICard } from '@/interfaces'
import { cards_localStorage } from '@/myLocalStorage'

export const useCards = defineStore('cards', () => {

  const cards = cards_localStorage
  
  const state: ICard[] = reactive(cards.read)

  const getCards = () => state

  const createDay = (content: string) => {
    state.push({content, date: new Date().getTime()})
    cards.update(state)
  }

  const updateDay = (content: string) => {
    const today = state.pop() as unknown as ICard
    today.content = content
    state.push(today)
    cards.update(state)
  }

  const compareDateOfToday = (date: Date) => {
    const newDate = HandleDate.create()
    
    newDate.setHours(0, 0, 0, 0)
    date.setHours(0, 0, 0, 0)
    
    const todayTime = newDate.getTime()
    const lastDayTime = date.getTime()
    
    return{
      sameDay: () => {
        return todayTime === lastDayTime
      },
      isSmaller: () => {
        return todayTime > lastDayTime
      }
    }
  }
  
  const createOrUpdate = (content: string) => {
    const lastDayOfDiary = new Date( state[ state.length - 1 ].date )

    const todayIsNewDay = compareDateOfToday(lastDayOfDiary).isSmaller()

    todayIsNewDay ? createDay(content) : updateDay(content)
  }

  const DeleteDay = (date: Date) => {
    const index = state.findIndex(
      (diary) => new Date(diary.date).getTime() === new Date(date).getTime()
    )

    if( index !== -1 ){
      state.splice(index, 1)
      cards.update(state)
    }
  }

  const getDay = (id: number) => {
    return state.find(({date}) => new Date(date).getTime() === id)
  }

  const getLastToday = () => {
    const newDate = HandleDate.create()
    const lastDayOfDiary = new Date( state[ state.length - 1 ].date )

    newDate.setHours(0, 0, 0, 0)
    lastDayOfDiary.setHours(0, 0, 0, 0)

    const todayTime = newDate.getTime()
    const lastDayTime = lastDayOfDiary.getTime()
  
    
    if(todayTime !== lastDayTime)return null
    return state[state.length - 1]
  }

  return {
    getCards,
    createOrUpdate,
    DeleteDay,
    getDay,
    getLastToday,
    compareDateOfToday,
  }
})