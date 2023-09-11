<script setup lang="ts">
</script>

<template>
  <main class="home-page">
    <nav>
      <RouterLink to="/diary"><button><h2>Entrar sem conta</h2></button></RouterLink>
      <RouterLink to="/register"><button><h2>Crie uma conta</h2></button></RouterLink>
      <RouterLink to="/login"><button><h2>Logar</h2></button></RouterLink>
    </nav>
  </main>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  
    & nav {
      // medeidas
      height: 90vh;
      width: 90%;

      //display
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;

      & a {
        width: 90%;

        & button {
          // medidas
          width: 100%;
    
  }
}
</style>
