<script setup lang="ts">
import { marked } from 'marked';

marked.setOptions({
  breaks: true,
})

const props = defineProps<{content: string}>()

const markedV = marked(props.content, { mangle: false, headerIds: false });
</script>

<template>
  <div class="day-card">
    <div class="date"><p>19/07/23</p></div>
    <div
      class="content"
      v-html="markedV"
    ></div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .day-card {
    width: 98%;
    max-height: 33vh;
    background-color: white;
    border-radius: 1rem;
    margin-top: 5px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    // impedir o encolhimento por estar dentro de um container display flex
    flex-shrink: 0;

    .content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>