<script setup lang="ts">
import DayCard from '@/components/dayCard/DayCard.vue'
import { ref } from 'vue';
import { type ICard } from '@/stores/DiaryApi'

const cards = ref<ICard[]>()
</script>

<template>
  <div class="container">
    <DayCard 
      v-for="({content, date}, i) in cards"
      :key="i"
      :content="content"
      :date="new Date(date)"
    />
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {

}
</style>
