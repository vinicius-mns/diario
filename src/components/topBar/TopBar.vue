<script setup lang="ts">
import { useStyle } from '@/stores/style';

const style = useStyle()
</script>

<template>
  <header class="top-bar">
    <button class="logo">D I A R I O</button>
  </header>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .top-bar {
    // posicionamento
    position: fixed;
    top: 0;

    // display
    display: flex;
    align-items: center;

    // tamanho
    height: 6vh;
    width: 100%;
    
    // estilo
    background-color: v-bind('style.value.pageColor');
    box-shadow: v-bind('style.value.boxShadow');

    .logo {
      // medidas
      height: 100%;
      aspect-ratio: 4/1;
      
      // display
      display: flex;
      justify-content: center;
      align-items: center;

      // estilo
      color: v-bind('style.value.especialColor');
      
      // button estilo  
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }
}
</style>