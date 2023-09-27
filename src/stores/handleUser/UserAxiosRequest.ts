import type { IUser } from "@/interfaces"
import axios from "axios"
import { httpsStatus } from "@/utils/httpStatus"

export interface IUserResponse {
  data: string,
  sucess: boolean,
}

class UserAxios {
  constructor(
    private _apiUrl = 'https://diario-api-production.up.railway.app',
    private _axios = axios,
  ){}

  private _response = (data: any, sucess: boolean): IUserResponse => {
    return { data, sucess }
  }

  public login = async (user: IUser): Promise<IUserResponse> => {
    const path = this._apiUrl + '/user/login'
  
    return this._axios.post(path, user)
      .then(({status, data}) => {

        const ok = status === httpsStatus.ok

        return ok
          ? this._response(data, true)
          : this._response(data, false)
      })
      .catch((error) => {
        return this._response(error, false)
      })
  }

  public register = async (user: IUser): Promise<IUserResponse> => {
    const path = this._apiUrl + '/user/create'

    return this._axios.post(path, user)
      .then(({status, data}) => {

        const created = status === httpsStatus.created

        return created
          ? this._response(data, true)
          : this._response(data, false)
      })
      .catch((error) => {
        return this._response(error, false)
      })
  }
}

export const userAxios = () => new UserAxios()