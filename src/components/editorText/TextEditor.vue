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
    <div class="textarea-container">
      <textarea @input="edit"></textarea>
    </div>
  </main>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .text-editor-container {
    position: absolute;
    bottom: 0;
    margin-bottom: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 20vh;
    
    .textarea-container {
      height: 100%;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;

      textarea {
        border-radius: 1rem;
        background-color: rgb(129, 188, 122);
        width: 100%;
        height: 100%;
        padding: 1rem;
        font-size: 1rem;
        resize: none;
        border: none;
        outline: none;
      }
    }
  }
}
</style>