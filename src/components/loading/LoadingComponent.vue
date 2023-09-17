<script setup lang="ts">
import { useStyle } from '@/stores/style';
import { useToggleComponents } from '@/stores/toggleComponents';

const toggleComponent = useToggleComponents()

const style = useStyle()
</script>

<template>
  <div class="back-loading-container" v-if="toggleComponent.globalLoading">
    <div class="loading-card">
      <div class="loading-style">
        <div class="polygon-container">
          <div class="polygon"></div>
        </div>
        <div class="ring"></div>
      </div>
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

    & .loading-card {
      // medidas
      height: 80px;
      aspect-ratio: 1;
  
      // estilo
      background-color: v-bind('style.value.baseColor');
      border-radius: 10px;
  
      // posicionamento
      position: relative;

      & .loading-style {
        // medidas
        width: 100%;
        height: 100%;

        & .ring {
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

        & .polygon-container {
          // medidas
          height: 80%;
          width: 80%;
    
          // estilo
          border-radius: 50%;
    
          // posicionamento
          position: absolute;
          top: 10%;
          left: 10%;
          
          & .polygon {
            // medidas
            height: 100%;
            aspect-ratio: 1;
            
            // estilo;
            background-color: v-bind('style.value.especialColor');
            clip-path: polygon(50% 0%, 93% 75%, 7% 75%);
          }
        }

        animation: rotation 2.5s infinite;
      }        
    }
  }

  @keyframes rotation {
    25% {
      transform: rotate(180deg);
    }
    50% {
      transform-style: preserve-3d;
      transform: perspective(1200px) rotateX(60deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>