<script setup lang="ts">
import { useStyle } from '@/stores/style'

const style = useStyle()
</script>

<template>
  <div class="blur">
    <div class="config-component">
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .blur {
    // posicionamento
    position: fixed;
    z-index: 1;

    // tamanhos
    width: 100%;
    height: 100vh;

    // blur e cores
    background: v-bind('style.value.pageColor'), 0.1;
    backdrop-filter: blur(7.7px);

    // display
    display: flex;
    align-items: center;
    justify-content: center;

    & .config-component {
      // estilo
      color: v-bind('style.value.textColor');
      background-color: v-bind('style.value.baseColor');
      border-radius: v-bind('style.value.borderRadius');
      box-shadow: v-bind('style.value.boxShadow');

      width: 90%;
      min-height: 50vh;
    }
  }
}
</style>