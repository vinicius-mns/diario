<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useStyle } from './stores/style';

const style = useStyle()
</script>

<template>
  <div class="app">
    <RouterView />
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