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

  const createOrUpdate = (content: string) => {
    const newDate = HandleDate.create()
    const lastDayOfDiary = new Date( state[ state.length - 1 ].date )

    newDate.setHours(0, 0, 0, 0)
    lastDayOfDiary.setHours(0, 0, 0, 0)

    const todayTime = newDate.getTime()
    const lastDayTime = lastDayOfDiary.getTime()
  
    todayTime > lastDayTime ? createDay(content) : updateDay(content)
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

  return {
    getListOfDays,
    createOrUpdate,
    DeleteDay
  }
})