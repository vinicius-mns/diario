<script setup lang="ts">
import textEditor from './components/editorText/TextEditor.vue'
import previewText from './components/previewText/PreviewText.vue';
import DiaryPageVue from './views/DiaryPage.vue';
import TopBar from './components/topBar/TopBar.vue';
</script>

<template>
  <div class="app">
    <div class="container">
      <previewText />
      <textEditor />
      <DiaryPageVue />
      <TopBar />
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .container {
    display: flex;
    flex-direction: column;
  }
}
</style>