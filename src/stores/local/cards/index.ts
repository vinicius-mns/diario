import type { ICard } from "@/interfaces"
import { cards_localStorage } from "@/myLocalStorage"
import type { ICardStore } from "@/stores/storeInterfaces"
import { defineStore } from "pinia"
import { reactive } from "vue"


export const useLocalCards = defineStore('localCards', (): ICardStore => {

  const cardsLocalStorage = cards_localStorage

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

    const response = cardsLocalStorage.read

    cards.change(response) 
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

  const _atualizeAll = () => {
    _atualizeCards()
    _atualizeTypeEditor()
    _atualizeCard()
  }

  const _createCard = async () => {
    const cards = state.cards.value

    const content = state.card.value.content
    const date = new Date().getTime()

    const card = { content, date }

    cardsLocalStorage.update([...cards, card])

    _atualizeAll()
  }

  const _updateCard = () => {
    const card = state.card.value

    const cards = state.cards.value

    cards.pop()

    cardsLocalStorage.update([...cards, card])

    _atualizeAll()
  }

  const createOrUpdateCard = async () => {
    const dateIs = _compareDates()
    
    if(dateIs.newDay()) await _createCard()
    if(dateIs.sameDay()) await _updateCard()
  }

  const init = async () => {
    _atualizeAll()
  }

  return {
    state,
    init,
    createOrUpdateCard,
  }
})