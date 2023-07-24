<script setup lang="ts">
import { onMounted, onUpdated, ref } from 'vue'

const diaryPage = ref<HTMLElement>()

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
    <div class="diary-page" ref="diaryPage">
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
