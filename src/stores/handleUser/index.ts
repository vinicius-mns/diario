import { defineStore } from "pinia"
import { userAxios } from "./UserAxiosRequest"
import { useToggleComponents } from "../toggleComponents"
import { token_localStorage } from "@/myLocalStorage"
import { reactive } from "vue"
import type { IUser } from "@/interfaces"
import router from "@/router"

export const useHandleUser = defineStore('handleUser', () => {

  const userRestApi = userAxios()
  const globalLoading = (state: boolean) =>  useToggleComponents().toggleGlobalLoading(state)
  const tokenStorage = token_localStorage

  const state: {user: IUser} = reactive({
    user: {
      email: '',
      password: '',
      remember: false,
    }
  })

  const change = {
    user: {
      remeber: {
        toggle: () => state.user.remember = !state.user.remember
      }
    }
  }

  const saveTokenAndRedirect = (token: string) => {
    tokenStorage.update(token)
    router.push('/diary/remote')
  }

  const login = () => {
    globalLoading(true)
    
    userRestApi.login(state.user).then(({data, sucess}) => {
      globalLoading(false)
      
      sucess
        ? saveTokenAndRedirect(data)
        : console.log(data)
    })
  }

  const register = () => {
    globalLoading(true)
    userRestApi.register(state.user).then(({data, sucess}) => {
      globalLoading(false)
      
      sucess
        ? saveTokenAndRedirect(data)
        : console.log(data)
    })
  }

  return {
    state,
    change,
    login,
    register,
  }
})