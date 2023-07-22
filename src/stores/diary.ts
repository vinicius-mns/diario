import { HandleLocalStorage } from '@/utils'
import { type IDay } from '@/interfaces'
import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { boasVindas } from '@/assets/boasVindas'

const diaryStore = 'diaryStore'
export const useDiaryStore = defineStore(diaryStore, () => {

  const initState: IDay[] = [{ date: new Date(), content: boasVindas }]

  const localStorageDiary = new HandleLocalStorage(diaryStore, initState)
  
  const state = reactive(localStorageDiary.read)
})