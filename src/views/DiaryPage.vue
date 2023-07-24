<script setup lang="ts">
import TopBarVue from '@/components/topBar/TopBar.vue'
import DayCard from '@/components/dayCard/DayCard.vue'
import TextEditor from '@/components/editorText/TextEditor.vue';

import { useDiaryStore } from '@/stores/diary';
import { onMounted, onUpdated, ref } from 'vue'

const diaryPage = ref<HTMLElement>()
const diary = useDiaryStore()

const scrollToEnd = () => {
  if(diaryPage.value){
    diaryPage.value.scrollTop = diaryPage.value.scrollHeight
  }
}

onMounted(scrollToEnd)
onUpdated(scrollToEnd)
</script>

<template>
  <div class="container">
    <TopBarVue />
    <TextEditor />
    <div class="diary-page" ref="diaryPage">
      <DayCard 
        v-for="({content, date}, i) in diary.getListOfDays()"
        :key="i"
        :content="content"
        :date="new Date(date)"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .container {
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
