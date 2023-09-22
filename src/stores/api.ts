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
      diary: {
        card: {
          create: () => `${conectApiUrl}/diary/card/create`,
          read: () => `${conectApiUrl}/diary/card/read`,
          update: () => `${conectApiUrl}/diary/card/update`,
        }
      }
    }
  }

  const user = () => {

    const _redirectTo = {
      homePage: () => {
        router.push('/')
      },
      remoteDiary: () => {
        router.push('/diary/remote')
      }
    }

    const login = (date: Iuser) => {
    }

    return {
      create,
      login,
    }
  }
})