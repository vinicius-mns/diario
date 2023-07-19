<script setup lang="ts">
import { useMarkdownStore } from '../../stores/markdown';
import { useToggleComponents } from '../../stores/toggleComponents';
import { marked } from 'marked';
import { computed, onUpdated, ref } from 'vue';

const toggleComponents = useToggleComponents()
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
  <div 
    class="marked-view"
    ref="markedViewRef"
    v-if="toggleComponents.previewText"
  >
    <div 
      class="marked"
      v-html="compiledMarkdown"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .marked-view {
    // posicionamento
    position: fixed;
    bottom: calc(20vh + 1rem + 0.5rem);

    // estilo
    background-color: white;
    border-radius: 1rem;
    
    // tamanho
    width: 96%;
    height: 37vh;
    margin-left: 2%;
    box-sizing: border-box;
    padding: 1rem;

    // scroll
    overflow: auto;

    .marked {
      width: 100%;
      height: 100%;
      word-wrap: break-word;
    }

    //animacao
    opacity: 0;
    transform: translateY(30%);
    animation: on-mount 0.5s forwards;
  }

  @keyframes on-mount {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>