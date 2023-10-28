import type { ICard } from "@/interfaces"

interface IState {
  cards: {
    value: ICard[]
    change: (cards: ICard[]) => void
  }
  card: {
    value: ICard
    change: (card: ICard) => void
  },
  typeEditor: {
    value: 'add' | 'edit'
    change: (type: 'add' | 'edit' ) => void
  }
}

export interface ICardStore {
  state: IState
  createOrUpdateCard: () => void
  getOne: (id: string) => Promise<ICard> | ICard
  init: () => Promise<void>
}

export interface IStyleStore {
  
}