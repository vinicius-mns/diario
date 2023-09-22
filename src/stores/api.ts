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

    const _setTokenAndPushToDiary = (token: string) => {
      props.loading(false)

      props.token.update(token)

      _redirectTo.remoteDiary()
    }

    const _error = (error: any) => {
      props.loading(false)

      props.token.delete()
  
      console.log(error)
  
      _redirectTo.homePage()
    }


    const login = (date: IUser) => {
    }

    return {
      create,
      login,
    }
  }
})