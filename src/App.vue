<script setup lang="ts">
import LoadingComponent from '@/components/loading/LoadingComponent.vue';
import { RouterView } from 'vue-router'
import { useStore } from '@/stores'

const store = useStore()
const style = store.use.local.style()
</script>

<template>
  <div class="app">
    <RouterView />
    <LoadingComponent />
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .app {
    background-color: v-bind('style.value.pageColor');
    min-height: 100vh;
    
    // animation
    transition: all 0.5s;
  }
}
</style>