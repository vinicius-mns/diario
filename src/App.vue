<script setup lang="ts">
import textEditor from './components/editorText/TextEditor.vue'
import previewText from './components/previewText/PreviewText.vue';
</script>

<template>
  <div class="app">
    <div class="container">
      <previewText />
      <textEditor />
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .container {
    display: flex;
    background-color: red;
    flex-direction: column;
  }
}
</style>