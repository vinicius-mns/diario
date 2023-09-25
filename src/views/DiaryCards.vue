<script setup lang="ts">
import DayCard from '@/components/dayCard/DayCard.vue'
import { onMounted, ref } from 'vue';
import { type ICard } from '@/interfaces'
import { useCards } from '@/stores/cards'
import { useApi } from '@/stores/api'

export interface IDiaryProps {
  get: 'remote' | 'local'
}

const props = defineProps<IDiaryProps>()
const cards = ref<ICard[]>()
const cardsLocalStorage = useCards()
const lastElement = ref<HTMLElement>()

const { diary } = useApi()

const init = async () => {
  switch(props.get) {
    case 'local':
      cards.value = cardsLocalStorage.getCards()

      break
    case 'remote':
      cards.value = await diary.card.read() as ICard[]

      break
    default: 
      return []
  }
  
  const autoScroll = () => lastElement.value?.scrollIntoView({behavior: 'smooth'})
  setTimeout(autoScroll, 0)
}

onMounted(init)
</script>

<template>
  <div class="container">
    <DayCard 
      v-for="({content, date}, i) in cards"
      :key="i"
      :content="content"
      :date="date"
    />
    <a ref="lastElement"></a>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .container {
    // padding
    padding-bottom: 100px;
    padding-top: 60px;

    // display
    display: flex;
    flex-direction: column;
    align-items: center;
    
    // cores
    background-color: transparent;

    // animacao
    transition: all 0.5s;
  }
}
</style>