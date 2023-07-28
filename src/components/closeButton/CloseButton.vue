<script setup lang="ts">
interface Iclose {
  close: () => void
}

const props = defineProps<Iclose>()
</script>

<template>
  <button class="close-button" @click="props.close"></button>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .close-button {
    // medidas
    height: 28px;
    aspect-ratio: 1;
    
    // posicionamento
    position: absolute;
    top: 2px;
    right: 5px;

    // display
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: transparent;

    // button style
    border: none;
    cursor: pointer;
  
    // cruz X
    &::after, &::before {
      content: '';
      position: absolute;
      width: 1px;
      height: 80%;
      border-radius: 4px;
      background-color: black;
      transform: rotate(45deg) 
    }
    &::before { transform: rotate(-45deg) }
  }
}
</style>