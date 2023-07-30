import { HandleDate, HandleLocalStorage } from '@/utils'
import { type IDay } from '@/interfaces'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { boasVindas } from '@/assets/boasVindas'

const diaryStore = 'diaryStore'
export const useDiaryStore = defineStore(diaryStore, () => {

  const initState: IDay[] = [{ date: new Date(), content: boasVindas }]

  const localStorageDiary = new HandleLocalStorage(diaryStore, initState)
  
  const state = reactive(localStorageDiary.read)

  const getListOfDays = () => state

  const createDay = (content: string) => {
    state.push({content, date: HandleDate.create()})
    localStorageDiary.update(state)
  }

  const updateDay = (content: string) => {
    const today = state.pop() as unknown as IDay
    today.content = content
    state.push(today)
    localStorageDiary.update(state)
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
      localStorageDiary.update(state)
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
    getListOfDays,
    createOrUpdate,
    DeleteDay,
    getDay,
    getLastToday,
    compareDateOfToday,
  }
})