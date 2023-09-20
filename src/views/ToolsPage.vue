<script setup lang="ts">
  import TextEditor from '@/components/editorText/TextEditor.vue';
  import TopBar from '@/components/topBar/TopBar.vue';
</script>

<template>
  <div>
    <TopBar />
    <TextEditor />
    <div class="routes">
      <RouterView />
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .routes {
    height: 100vh;
    overflow-y: scroll;
  }
}
</style>