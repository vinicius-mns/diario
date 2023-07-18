<script setup lang="ts">
import { useMarkdownStore } from '../../stores/markdown';
import { marked } from 'marked';
import { computed, onUpdated, ref } from 'vue';

const markdownStore = useMarkdownStore()
const markedViewRef = ref<HTMLElement>();

marked.setOptions({
  breaks: true,
})

const compiledMarkdown = computed(() => {
  return marked(markdownStore.getValue(), { mangle: false, headerIds: false });
});

onUpdated(() => {
  if (markedViewRef.value) {
    markedViewRef.value.scrollTop = markedViewRef.value.scrollHeight;
  }
})

</script>

<template>
  <main class="preview-text-container">
    <div class="marked-view" ref="markedViewRef">
      <div class="marked" v-html="compiledMarkdown"></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .preview-text-container {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 40vh;

    .marked-view {
      margin-top: 6px;
      height: 100%;
      width: 100%;
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
