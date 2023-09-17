<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useStyle } from './stores/style';
import ConfigComponent from './components/configComponent/ConfigComponent.vue';
import LoadingComponent from './components/loading/LoadingComponent.vue';

const style = useStyle()
</script>

<template>
  <div class="app">
    <ConfigComponent />
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