<script setup lang="ts">
import { useMarkdownStore } from '../../stores/markdown';
import { marked } from 'marked';
import { computed } from 'vue';

const markdownStore = useMarkdownStore()

const compiledMarkdown = computed(() => {
  return marked(markdownStore.getValue(), { mangle: false, headerIds: false });
});
</script>

<template>
  <main class="preview-text-container">
    <h1>Markdown Visualizador</h1>
    <div class="marked-view">
      <div class="marked" v-html="compiledMarkdown"></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .preview-text-container {
    background-color: blue;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 50vh;

    .marked-view {
      background-color: rgb(92, 163, 213);
      height: 100%;
      width: 90%;
      overflow: auto;

      .marked {
        width: 100%;
        height: 100%;
        word-wrap: break-word;
      }
    }
  }
}
</style>
