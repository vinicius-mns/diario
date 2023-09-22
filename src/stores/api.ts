import { defineStore } from "pinia"
import { useToggleComponents } from "./toggleComponents"
import type { ICard, IUser } from '@/interfaces'
import axios from "axios"
import { httpsStatus } from "@/utils/httpStatus"
import { token_localStorage } from "@/myLocalStorage"
import router from "@/router"

export const useApi = defineStore('api', () => {

  const conectApiUrl = 'https://diario-api-production.up.railway.app'

  const props = {
    loading: (state: boolean) => useToggleComponents().toggleGlobalLoading(state),
    toggle: useToggleComponents(),
    token: token_localStorage,
    redirect: {
      homePage: () => {
        router.push('/')
      },
      remoteDiary: () => {
        router.push('/diary/remote')
      }
    },
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

    const _setTokenAndPushToDiary = (token: string) => {
      props.token.update(token)

      props.redirect.remoteDiary()
    }

    const _error = (error: any) => {
      props.token.delete()
  
      console.log(error)
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

    const logout = () => {
      props.toggle.toggleConfigComponent()
      props.redirect.homePage()
      props.token.delete()
    }

    const redirectIfToken = () => {
      if(props.token.read) {
        props.redirect.remoteDiary()
      }
    }

    return {
      create,
      login,
      logout,
      redirectIfToken,
    }
  }

  const diary = () => {

    const card = () => {

      const _error = (error: any) => {
        props.token.delete()
  
        console.log(error)
    
        props.redirect.homePage()
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