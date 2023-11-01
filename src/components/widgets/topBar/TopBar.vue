<script setup lang="ts">
import ConfigComponent from '@/components/configComponent/ConfigComponent.vue';
import { useStore } from '@/stores'
import { HandleDate } from '@/utils';

const store = useStore()
const style = store.use.local.style()
const { state: { configComponent } } = store.use.widget.topbar()

const c = () => {
  configComponent.toggleShow()
}

const today = HandleDate.changeToBrazilianDate(new Date())

</script>

<template>
  <div class="top-bar-container">
    <ConfigComponent />
    <header class="top-bar">
      <button @click="c" >{{ today }}</button>
      <button class="login">Login</button>
      <button class="interative-button">
        <div class="style"></div>
      </button>
    </header>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .top-bar-container {
    // posicionamento
    position: fixed;
    top: 0;

    // tamanho
    height: 57px;
    width: 100%;
  }

  .top-bar {
    // display
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    // tamanho
    height: 57px;
    width: 100%;
    
    // estilo
    background-color: v-bind('style.value.pageColor');

    // animacao
    transition: all 0.5s;

    & button {      
      // display
      display: flex;
      justify-content: center;
      align-items: center;

      //medidas
      height: 100%;

      // estilo
      color: v-bind('style.value.especialColor');
      
      // button estilo  
      border: none;
      background-color: transparent;
      cursor: pointer;

    }
    & .login {
      height: 60%;
      width: 35%;
      border-radius: v-bind('style.value.borderRadius');
      border: dashed 1px v-bind('style.value.especialColor');
    }

    & .interative-button {
      height: 60px;
      aspect-ratio: 1;

      border-radius: 50%;
      background-color: v-bind('style.value.baseColor');
      box-shadow: v-bind('style.value.boxShadow');

      position: fixed;
      bottom: 16%;
      right: 8%;

      & .style {
        height: 70%;
        border: dashed 2px v-bind('style.value.especialColor');
        aspect-ratio: 1;

        border-radius: 50%;
      }
    }
  }
}
</style>