<script setup lang="ts">
import DayCard from '@/components/dayCard/DayCard.vue'
import { onMounted, onUpdated, ref } from 'vue'

const container = ref<HTMLElement>()

const scrollToEnd = () => {
  if(container.value){
    container.value.scrollTop = container.value.scrollHeight
  }
}

const mocklist = [
`# Dia de hoje
--- 
## Refeições
### tarde
- cereal | 192 calorias
- paozinho | 257 calorias
- sassami | 40 calorias
- queijo | 60 calorias`,

`# Dia de hoje
--- 
## Refeições
### tarde`,
`# Dia de hoje
--- 
## Refeições
### tarde
- cereal | 192 calorias
- paozinho | 257 calorias
- sassami | 40 calorias
- queijo | 60 calorias`,

`# Dia de hoje
--- 
## Refeições
### tarde`,
]

onMounted(scrollToEnd)
onUpdated(scrollToEnd)
</script>

<template>
  <div
    class="diary-page"
    ref="container"
  >
    <DayCard v-for="(c, i) in mocklist" :key="i" :content="c" />
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .diary-page {
    padding-top: 6vh;
    padding-bottom: 2vh;
    width: 100%;
    
    height: 85vh;
    overflow: auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: blue;
  }
}
</style>
