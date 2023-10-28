<script setup lang="ts">
import { useStore } from '@/stores'

const store = useStore()
const style = store.use.local.style()

const links = [
  {name: 'diary local', path: '/diary/local'},
  {name: 'register', path: '/register'},
  {name: 'login', path: '/login'},
]
</script>

<template>
  <main class="home-page">
    <nav>
      <RouterLink
        v-for="({name, path}, i) in links"
        :key="i"
        :to="path"
      >
        <button>
          <h2>{{ name }}</h2>
        </button>
      </RouterLink>
    </nav>
  </main>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .home-page {
    // display
    display: flex;
    justify-content: center;
    align-items: center;

    // medidas
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
  
          // estilo
          cursor: pointer;
          border: none;
          border-radius: v-bind('style.value.borderRadius');
          color: v-bind('style.value.textColor');
          background-color: v-bind('style.value.baseColor');
          box-shadow: v-bind('style.value.boxShadow');
        }
      }
    }
  }
}
</style>
@/stores/handleCards/api@/stores/style/style@/stores/local/style