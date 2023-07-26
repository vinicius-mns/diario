<script setup lang="ts">
import { marked } from 'marked'

marked.setOptions({ breaks: true, mangle: false, headerIds: false })

const props = defineProps<{ content: string }>()
</script>

<template>
  <div
    class="content"
    v-html="marked(props.content)"
  ></div>
</template>

<style lang="scss">
@media screen and (max-width: 700px) {
  .content {
    width: 90%;
    text-align: justify;

    word-wrap: break-word;

    h1 {
      font-size: 1.5em;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    
    & strong {
      color: red;
    }

    transition: all 0.5s
  }
}
</style>