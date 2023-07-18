<script setup lang="ts">
import { useMarkdownStore } from '../../stores/markdown';

const markdownStore = useMarkdownStore()

const edit = (event: Event) => {
  const { value } = event.target as HTMLTextAreaElement
  markdownStore.editValue(value)
}
</script>

<template>
  <main class="text-editor-container">
    <h1>Markdown Editor</h1>
    <div class="textarea-container">
      <textarea @input="edit"></textarea>
    </div>
  </main>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .text-editor-container {
    background-color: rgb(188, 122, 122);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 49vh;

    .textarea-container {
      background-color: rgb(92, 163, 213);
      height: 100%;
      width: 90%;

      textarea {
        background-color: white;
        width: 100%;
        height: 100%;
        font-size: 1rem;
        resize: none;
        border: none;
        outline: none;
        p {
          background-color: red;
        }
      }
    }
  }
}
</style>