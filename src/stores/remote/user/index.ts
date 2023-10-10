import { defineStore } from "pinia"
import { userAxios } from "./UserAxiosRequest"
import { useToggleComponents } from "@/stores/toggleComponents"
import { token_localStorage } from "@/myLocalStorage"
import { reactive } from "vue"
import type { IUser } from "@/interfaces"
import router from "@/router"

export const useRemoteUser = defineStore('remoteUser', () => {

  const userRestApi = userAxios()
  const globalLoading = (state: boolean) =>  useToggleComponents().toggleGlobalLoading(state)
  const tokenStorage = token_localStorage

  const state = reactive({
    user: {
      email: '',
      password: '',
      password2: '',
      remember: {
        value: false,
        toggle: () => state.user.remember.value = !state.user.remember.value
      },
    }
  })

  const _saveTokenAndRedirect = (token: string) => {
    tokenStorage.update(token)
    router.push('/diary/remote')
  }

  const _cleanState = () => {
    state.user.email = ''
    state.user.password = ''
    state.user.password2 = ''
    state.user.remember.value = false
  }

  const login = () => {
    globalLoading(true)

    const user: IUser = {
      email: state.user.email,
      password: state.user.password,
      remember: state.user.remember.value,
    }
    
    userRestApi.login(user).then(({data, sucess}) => {
      globalLoading(false)
      
      sucess
        ? _saveTokenAndRedirect(data)
        : console.log(data)
    })
    _cleanState()
  }

  const register = () => {
    globalLoading(true)
    
    const user: IUser = {
      email: state.user.email,
      password: state.user.password,
      remember: state.user.remember.value,
    }

    if(state.user.password !== state.user.password2){
      window.alert('senhas nao conferem')
      globalLoading(false)

    } else {
      userRestApi.register(user).then(({data, sucess}) => {
        globalLoading(false)
        
        sucess
          ? _saveTokenAndRedirect(data)
          : console.log(data)
      })
    }

    _cleanState()
  }

  const logout = () => {
    router.push('/')
    tokenStorage.delete()
    _cleanState()
  }

  return {
    state,
    login,
    register,
    logout,
  }
})
