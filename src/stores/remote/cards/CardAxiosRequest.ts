import axios from "axios"
import { httpsStatus } from "@/utils/httpStatus"
import type { ICard } from "@/interfaces"

export interface ICardResponse {
  data: string,
  sucess: boolean,
}

class CardAxios {
  constructor(
    private _apiUrl = 'https://diario-api-production.up.railway.app',
    private _axios = axios,
  ){}

  private _response = (data: any, sucess: boolean): ICardResponse => {
    return { data, sucess }
  }

  private _path = () => {
    const diary = `${this._apiUrl}/diary`

    return {
      create: `${diary}/card/create`,
      read: `${diary}/card/read`,
      update: `${diary}/card/update`,
    } 
  }

  public create = async (token: string, card: ICard) => {
    const path = this._path().create
    const headers = { 'Authorization': token }
    const body: ICard = card

    console.log('chegou')

    return this._axios.post(path, body, { headers })
      .then(({ status, data }) => {
        const created = status === httpsStatus.created

        return created
          ? this._response(data, true)
          : this._response(data, false)
      })
      .catch((error) => {
        return this._response(error, false)
      })
  }

  public read = async (token: string) => {
    const path = this._path().read
    const headers = { 'Authorization': token }

    return this._axios.get(path, { headers })
      .then(({ status, data }) => {
        const ok = status === httpsStatus.ok

        return ok
          ? this._response(data, true)
          : this._response(data, false)
      })
      .catch((error) => {
        return this._response(error, false)
      })
  }

  public update = async (token: string, card: ICard) => {
    const path = this._path().update
    const headers = { 'Authorization': token }
    const body = card

    return this._axios.post(path, body, { headers })
      .then(({ status, data }) => {
        const ok = status === httpsStatus.ok

        return ok
          ? this._response(data, true)
          : this._response(data, false)
      })
      .catch((error) => {
        return this._response(error, false)
      })
  }
}

export const cardAxios = () => new CardAxios()