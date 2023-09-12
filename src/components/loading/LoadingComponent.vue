<script setup lang="ts">
import { useStyle } from '@/stores/style';

const style = useStyle()
</script>

<template>
  <div class="back-loading-container">
    <div class="loading-container">
      <div class="polygon-container">
        <div class="polygon"></div>
      </div>
      <div class="transparent-circle"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .back-loading-container {
    // medidas
    width: 100%;
    height: 100vh;

    // estilo
    background-color: rgba(255, 255, 255, 0.5);

    // posicionamento
    position: absolute;
    top: 0;
    left: 0;

    // display
    display: flex;
    align-items: center;
    justify-content: center;

    .loading-container {
      // medidas
      height: 80px;
      aspect-ratio: 1;
  
      // estilo
      background-color: v-bind('style.value.baseColor');
      box-shadow: v-bind('style.value.boxShadow');
      border-radius: 10px;
  
      // posicionamento
      position: relative;
  
      // animacao
      animation: spin 2s infinite;
      
      & .transparent-circle {
        // medidas
        height: 60%;
        width: 60%;
  
        // posicionamento
        position: absolute;
        top: 20%;
        left: 20%;
  
        // estilo
        border-radius: 50%;
        background-color: v-bind('style.value.baseColor');
        border: v-bind('style.value.especialColor') solid 4px;
        box-sizing: border-box;
      }
  
      .polygon-container {
        // medidas
        height: 80%;
        width: 80%;
  
        // estilo
        border-radius: 50%;
  
        // posicionamento
        position: absolute;
        top: 10%;
        left: 10%;

        // animacao
        animation: rotation 2s infinite;
        
        & .polygon {
          // medidas
          height: 100%;
          aspect-ratio: 1;
  
          // estilo;
          background-color: v-bind('style.value.especialColor');
          clip-path: polygon(50% 0%, 93% 75%, 7% 75%);
        }
      }
    }
  }


  @keyframes rotation {
    to {
      transform: rotate(1turn);
    }
  }
</style>