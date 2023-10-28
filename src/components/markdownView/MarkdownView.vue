<script setup lang="ts">
import { marked } from 'marked'
import { useStore } from '@/stores'

const store = useStore()
const style = store.use.local.style()

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

    color: v-bind('style.value.textColor');

    & h1 {
      font-size: 1.5em;
      margin-bottom: 0;
      padding-bottom: 0;
    }
    
    & strong {
      color: v-bind('style.value.especialColor');
    }

    & img {
      max-width: 100%;
      border-radius: v-bind('style.value.borderRadius');
    }

    transition: all 0.5s
  }
}
</style>@/stores/style/style@/stores/local/style