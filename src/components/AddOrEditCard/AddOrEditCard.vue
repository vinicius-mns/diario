<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({
  add: false,
  text: () => state.add ? 'Adicionar' : 'Editar',
  class: () => state.add ? 'add' : 'edit',
  toggleText: () => state.add = !state.add,
})


</script>

<template>
  <button>
    {{ state.text() }}
  </button>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {

}
</style>