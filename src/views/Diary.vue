<script setup lang="ts">
  import TopBar from '@/components/topBar/TopBar.vue';
</script>

<template>
  <div>
    <TopBar />
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