<script setup lang="ts">
import TopBarVue from '@/components/topBar/TopBar.vue'
import DayCard from '@/components/dayCard/DayCard.vue'
import TextEditor from '@/components/editorText/TextEditor.vue';

import { useDiaryStore } from '@/stores/diary';

const diary = useDiaryStore()
</script>

<template>
  <div class="container">
    <TopBarVue />
    <TextEditor />
    <DayCard 
      v-for="({content, date}, i) in diary.getListOfDays()"
      :key="i"
      :content="content"
      :date="new Date(date)"
    />
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
    flex-direction: column-reverse;
    align-items: center;

    // cores
    background-color: transparent;

    // animacao
    transition: all 0.5s;
  }
}
</style>
