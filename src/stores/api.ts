import { defineStore } from "pinia"
import { useToggleComponents } from "./toggleComponents"
import type { IUser } from '@/interfaces'
import axios from "axios"
import { httpsStatus } from "@/utils/httpStatus"
import { token_localStorage } from "@/myLocalStorage"
import router from "@/router"

export const useApi = defineStore('api', () => {

  const conectApiUrl = 'https://diario-api-production.up.railway.app'

  const props = {
    loading: (state: boolean) => useToggleComponents().toggleGlobalLoading(state),
    token: token_localStorage,
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

    const create = (data: IUser) => {
      props.loading(true)
      const path = props.apiUrl.user.create()
      
      axios.post(path, data)
        .then((response) => {
          props.loading(false)
          
          const createdSucess = response.status === httpsStatus.created
  
          createdSucess
            ? _setTokenAndPushToDiary(response.data)
            : _error(response.data)
        })
        .catch((e) => {
          props.loading(false)

          _error(e)
        })
    }

    const login = (data: IUser) => {
      props.loading(true)
      const path = props.apiUrl.user.login()
      
      axios.post(path, data)
        .then((response) => {
          props.loading(false)

          const loggad = response.status === httpsStatus.ok
  
          return loggad
            ? _setTokenAndPushToDiary(response.data)
            : _error(response.data)
        })
        .catch((e) => {
          props.loading(false)

          _error(e)
        })
    }

    return {
      create,
      login,
    }
  }

  const diary = () => {

    const card = () => {

      const _error = (error: any): ICard[] => {
        console.log(error)
        return [
          {
            content: `Error: ${error}`,
            date: new Date().getTime()
          }
        ]
      }

      const read = () => {
        props.loading(true)

        const token = props.token.read
        
        if(token){
          const path = props.apiUrl.diary.card.read()
      
          const headers = { 'Authorization': token }
    
          return axios.get(path, { headers })
            .then((response) => {
              props.loading(false)
    
              const sucess = response.status === httpsStatus.ok
      
              return sucess
                ? response.data as ICard[]
                : _error(response.data)
            })
            .catch((e) => {
              props.loading(false)
              _error(e)
            })
        } else {
          _error('token nao declarado')
        }
      }

      return {
        read,
      }
    }

    return {
      card: card(),
    }
  }

  return {
    user: user(),
    diary: diary(),
  }
})