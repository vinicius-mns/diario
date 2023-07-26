<script setup lang="ts">
import { marked } from 'marked'
import { computed } from 'vue';

marked.setOptions({ breaks: true })

const options = { mangle: false, headerIds: false }

const props = defineProps<{ content: string }>()

const value = computed(() => marked(props.content, options))
</script>

<template>
  <div
    class="content"
    v-html="marked(value)"
  ></div>
</template>

<style lang="scss">
@media screen and (max-width: 700px) {
  .content {
    width: 90%;
    text-align: justify;

    transition: all 0.5s
  }
}
</style>