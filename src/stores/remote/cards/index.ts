import type { ICard } from "@/interfaces"
import { defineStore } from "pinia"
import { reactive } from "vue"
import { cardAxios } from "./CardAxiosRequest"
import {  token_localStorage } from "@/myLocalStorage"
import type { ICardStore } from "@/stores/storeInterfaces"
import { useToggleComponents } from "@/stores/toggleComponents"


export const useRemoteCards = defineStore('remoteCards', (): ICardStore => {

  const cardRemote = cardAxios()
  const tokenLocalStorage = token_localStorage
  const globalLoading = (state: boolean) =>  useToggleComponents().toggleGlobalLoading(state)

  const state = reactive({
    cards: {
      value: [] as ICard[],
      change: (cards: ICard[]) => state.cards.value = cards,
    },
    card: {
      value: { content: '', date: 0 },
      change: (card: ICard) => state.card.value = card,
    },
    typeEditor: {
      value: 'add' as 'add' | 'edit',
      change: (type: 'add' | 'edit') => state.typeEditor.value = type,
    },
  })

  const _getLastCard = () => {
    const cards = state.cards.value
    const lastCard = cards[cards.length - 1]
    return lastCard
  }

  const _compareDates = () => {
    const atualDate = new Date()
    const lastCard = _getLastCard()
    const cardDate = new Date(lastCard.date)
    
    atualDate.setHours(0, 0, 0, 0)
    cardDate.setHours(0, 0, 0, 0)

    const atualDateTime = atualDate.getTime()
    const cardDateTime = cardDate.getTime()
    
    return{
      sameDay: () => {
        return atualDateTime === cardDateTime
      },
      newDay: () => {
        return atualDateTime > cardDateTime
      },
      lastDay: () => {
        return atualDateTime < cardDateTime
      }
    }
  }
  
  const _atualizeCards = async () => {
    const cards = state.cards

    const token = tokenLocalStorage.read
    const response = await cardRemote.read(token)

    response.sucess
      ? cards.change(response.data as unknown as ICard[])
      : console.log(response.data)
  }

  const _atualizeCard = () => {
    const dateIs = _compareDates()
    const lastCard = _getLastCard()

    dateIs.sameDay()
      ? state.card.change(lastCard)
      : state.card.change({content:'', date: new Date().getTime()})
  }

  const _atualizeTypeEditor = () => {
    const dateIs = _compareDates()

    const typeEditor = state.typeEditor
    
    dateIs.sameDay()
      ? typeEditor.change('edit')
      : typeEditor.change('add')
  }

  const _atualizeAll = async () => {
    await _atualizeCards()
    _atualizeTypeEditor()
    _atualizeCard()
  }

  const _createCard = async () => {
    const card = state.card.value

    const token = tokenLocalStorage.read

    const create = await cardRemote.create(token, card)
    
    create.sucess
      ? _atualizeAll()
      : console.log(create.data)
  }

  const _updateCard = async () => {
    const card = state.card.value

    const token = tokenLocalStorage.read

    const create = await cardRemote.update(token, card)
    
    create.sucess
      ? await _atualizeAll()
      : console.log(create.data)
  }

  const createOrUpdateCard = async () => {
    const dateIs = _compareDates()

    if(dateIs.newDay()) await _createCard()
    if(dateIs.sameDay()) await _updateCard()
  }

  const getOne = async (id: string) => {
    const token = tokenLocalStorage.read

    globalLoading(true)

    return cardRemote.readOne(token, id)
      .then((content) => {
        globalLoading(false)
        
        return content.sucess
          ? content.data as unknown as ICard
          : { content: 'error', date: 0 }
      })
  }

  const init = async () => {
    await _atualizeAll()
  }

  return {
    state,
    init,
    createOrUpdateCard,
    getOne,
  }
})
