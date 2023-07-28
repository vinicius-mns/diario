<script setup lang="ts">
import { useStyle } from '@/stores/style'
import { useToggleComponents } from '@/stores/toggleComponents'
import CloseButton from '@/components/closeButton/CloseButton.vue';

const style = useStyle()
const toggle = useToggleComponents()
</script>

<template>
  <div class="blur" v-if="toggle.configComponent">
    <div class="config-component">
      <CloseButton :close="toggle.toggleConfigComponent" />
      <div>
        <h2>Estilo</h2>
        <div class="preset-container">
          <h3>Modelos predefinidos</h3>
          <button>Modo claro</button>
          <button>Modo Escuro</button>
        </div>
        <div class="preset-container">
          <h3>Cor em destaque</h3>
          <input type="color" name="color" id="color">
        </div>
      </div>
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

      // posicionamento (importante para o posicionamento do closebutton)
      position: relative;

      width: 90%;
      min-height: 50vh;
    }
  }
}
</style>