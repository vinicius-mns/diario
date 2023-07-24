<script setup lang="ts">
import { useMarkdownStore } from '../../stores/markdown';
import { useToggleComponents } from '../../stores/toggleComponents';

const markdownStore = useMarkdownStore()
const toggleComponents = useToggleComponents()

const edit = (event: Event) => {
  const { value } = event.target as HTMLTextAreaElement
  markdownStore.editValue(value)
}


import { onUpdated, ref } from 'vue';

const scrollToEnd = () => {
  if(markedView.value){
    markedView.value.scrollTop = markedView.value.scrollHeight
  }
}

const markedView = ref<HTMLElement>()

onUpdated(() => scrollToEnd())
</script>

<template>
  <div class="text-editor-container">
    <div 
      class="marked-view"
      ref="markedView"
      v-if="toggleComponents.previewText"
    >
      <div
        class="marked"
        v-html="markdown.render(markdownStore.state)"
      ></div>
    </div>

    <textarea
      v-model="markdownStore.state"
      placeholder="Digite aqui"
      @keydown.enter="createNewDate"
      @focus="toggleComponents.togglePreviewText"
      @blur="toggleComponents.togglePreviewText"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .text-editor-container {
    textarea {
      // posicionamento
      position: fixed;
      bottom: 0;
      margin-bottom: 0.5rem;

      // estilo
      border-radius: 2rem;
      background-color: rgb(129, 188, 122);

      // tamanho
      width: 96%;
      height: 6vh;
      left: 2%;
      font-size: 1rem;
      box-sizing: border-box;
      padding: 1rem;

      // transicao quando :focus acontecer
      transition: 0.5s all;

      // remove valores padros do textarea
      resize: none;
      border: none;
      outline: none;
    }

    textarea:focus {
      border-radius: 1rem;
      height: 20vh;
    }
  }
}
</style>