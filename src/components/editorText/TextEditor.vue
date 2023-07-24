<script setup lang="ts">
import { HandleMarkdown } from '@/utils';
import { useDiaryStore } from '@/stores/diary';
import { useMarkdownStore } from '@/stores/markdown';
import { useToggleComponents } from '@/stores/toggleComponents';
import { onMounted, onUpdated, ref } from 'vue';

const markedView = ref<HTMLElement>()

const markdownStore = useMarkdownStore()
const toggleComponents = useToggleComponents()
const diary = useDiaryStore()

const markdown = new HandleMarkdown()

const createNewDate = () => {
  const content = markdownStore.state
  diary.createOrUpdate(content)
}

onMounted(() => {
  const today = diary.getLastToday()
  if(today) markdownStore.state = today.content
})


const scrollToEnd = () => {
  if(markedView.value){
    markedView.value.scrollTop = markedView.value.scrollHeight
  }
}

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
    // posicionamento
    width: 100%;
    background-color: red;
    position: fixed;
    bottom: 0;

    // display
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

  .marked-view {
    // posicionamento
    margin-bottom: 0.5rem;

    // estilo
    background-color: white;
    border-radius: 1rem;
    
    // tamanho
    width: 96%;
    height: 37vh;
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
  
  textarea {
    // posicionamento
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

  @keyframes on-mount {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>