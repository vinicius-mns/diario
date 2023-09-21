import { defineStore } from "pinia"
import { useToggleComponents } from "./toggleComponents"
import type { IUser } from '@/interfaces'

export const useApi = defineStore('api', () => {

  const conectApiUrl = 'https://diario-api-production.up.railway.app'

  const props = {
    loading: (state: boolean) => useToggleComponents().toggleGlobalLoading(state),
    apiUrl: {
      user: {
        create: () => `${conectApiUrl}/user/create`,
        login: () => `${conectApiUrl}/user/login`,
      },
    }
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