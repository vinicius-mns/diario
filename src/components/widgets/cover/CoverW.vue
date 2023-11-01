<script setup lang="ts">
import { useStyle } from '@/stores/local'
import { ref } from 'vue'

const style = useStyle()

const close = ref(true)

const open = () => close.value = false
</script>

<template>
  <div>
    <Transition name="bounce">
      <div class="cover-container" v-if="close">
        <div class="hero">
          <h1>Diario</h1>
        </div>
        <button class="start" name="start"
          @click="open"
        >
        <h2>🔒</h2>
        </button>
        <footer>
          <p>Criado por vinicius boboca</p>
        </footer>
      </div>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .cover-container {
    // medidas
    width: 100%;
    height: 100vh;
    
    //posicionamento
    position: fixed;
    left: 0;
    top: 0;
    z-index: 100;
    
    // estilo
    background-color: v-bind('style.value.pageColor');

    & .hero {
      // medidas
      width: 90%;
      height: 54%;

      // posicionamento
      position: absolute;
      top: 12px;
      left: 5%;

      // estilo
      overflow: hidden;
      border-radius: 8px;
      color: v-bind('style.value.textColor');
      
      // display
      display: flex;
      align-items: center;
      justify-content: center;
    }

    & .start {
      background-color: v-bind('style.value.baseColor');

      // medidas
      width: 40%;
      height: 44px;

      // posicionamento
      position: absolute;
      top: 60%;
      right: 0;

      // estilo
      border: dashed 2px v-bind('style.value.especialColor');
      align-self: flex-end;
      text-align: center;
      border-radius: 18px 0 0 18px;

      & h2 {
        color: v-bind('style.value.textColor');
        margin: 0;
        padding: 0;
      }

      &:active {
        animation: openStart 0.5s forwards;
      }
    }
    
    & footer, p {
      // medidas
      margin: 0;
      padding: 0;
      width: 100%;

      // posicionamento
      text-align: center;
      position: absolute;
      bottom: 4px;

      // estilo
      color: v-bind('style.value.textColor');
    }
  }

.bounce-enter-active {
  animation: open 0.5s;
}
.bounce-leave-active {
  animation: open 0.5s;
}

@keyframes openStart {
  50% {
    width: 45%;
  }
  100% {
    width: 38%;
    opacity: 50%;
  }
}

@keyframes open {
  to {
    width: 0;
    overflow: hidden;
  }
}

}
</style>