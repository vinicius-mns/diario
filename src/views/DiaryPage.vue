<script setup lang="ts">
  import TopBar from '@/components/widgets/topBar/TopBar.vue';
</script>

<template>
  <div>
    <div class="routes">
      <RouterView />
    </div>
    <TopBar />
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .routes {
    padding-top: 57px;
    padding-bottom: 20px;
  }
}
</style>