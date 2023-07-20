<script setup lang="ts">
</script>

<template>
  <header class="top-bar">
    <div class="logo"></div>
    <button class="config">⚙️</button>
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

  // tamanho
  height: 6vh;
  width: 100%;
  
  // estilo
  background-color: pink;

  .config {
    height: 100%;
    aspect-ratio: 1;
    justify-self: end;
  }

  .logo {
    height: 100%;
    aspect-ratio: 4/1;

    background-color: red;
  }
}
}
</style>