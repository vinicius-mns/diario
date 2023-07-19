<script setup lang="ts">
import { useMarkdownStore } from '../../stores/markdown';
import { useToggleComponents } from '../../stores/toggleComponents';

const markdownStore = useMarkdownStore()
const toggleComponents = useToggleComponents()

const edit = (event: Event) => {
  const { value } = event.target as HTMLTextAreaElement
  markdownStore.editValue(value)
}

const placeholder = `# Dia de hoje
  ---
  ## Testando
  - item um
  - item 2
`
</script>

<template>
  <main class="text-editor-container">
    <textarea @input="edit" :placeholder="placeholder"
    @focus="toggleComponents.togglePreviewText" @blur="toggleComponents.togglePreviewText"
    ></textarea>
  </main>
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