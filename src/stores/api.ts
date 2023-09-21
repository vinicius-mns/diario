import { defineStore } from "pinia"
import { useToggleComponents } from "./toggleComponents"
import type { IUser } from '@/interfaces'

export const useApi = defineStore('api', () => {

  const props = {
    loading: (state: boolean) => useToggleComponents().toggleGlobalLoading(state),
  }

  const user = () => {

    const create = (data: IUser) => {
    }

    const login = (date: Iuser) => {
    }

    return {
      create,
      login,
    }
  }
})