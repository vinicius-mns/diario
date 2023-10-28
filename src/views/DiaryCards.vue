<script setup lang="ts">
import DayCard from '@/components/dayCard/DayCard.vue'
import AddOrEditCard from '@/components/AddOrEditCard/AddOrEditCard.vue'
import { useStore } from '@/stores'
import { onMounted } from 'vue';

export interface IDiaryProps {
  get: 'remote' | 'local'
}

const props = defineProps<IDiaryProps>()

const store = useStore()

const { state, init } = store.use[props.get].cards()

onMounted(async () => {
  await init()
})
</script>

<template>
  <div class="container">
    <DayCard 
      v-for="({content, date}, i) in state.cards.value"
      :key="i"
      :content="content"
      :date="date"
    />
    <AddOrEditCard
      :get="props.get"
      :typeText="state.typeEditor.value"
    />
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .container {
    // display
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    
    // cores
    background-color: transparent;

    // animacao
    transition: all 0.5s;
  }
}
</style>