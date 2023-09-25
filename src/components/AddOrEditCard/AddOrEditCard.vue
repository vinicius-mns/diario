<script setup lang="ts">
import { reactive } from 'vue';
import { useStyle } from '@/stores/style';

const state = reactive({
  add: false,
  text: () => state.add ? 'Adicionar' : 'Editar',
  class: () => state.add ? 'add' : 'edit',
  toggleText: () => state.add = !state.add,
})

const style = useStyle()

</script>

<template>
  <button
    @click="state.toggleText"
    class="add-or-edit-container"
    :class="state.class()"
  >
    <p>{{ state.text() }}</p>
  </button>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .add-or-edit-container {
    // estilo
    border: none;
    color: v-bind('style.value.especialColor');
    background-color: v-bind('style.value.baseColor');
    box-shadow: v-bind('style.value.boxShadow');

    transition: all 0.2s;

    & {
      font-size: 15px;
      padding: 0;
      margin: 0;
    }
  }
  .add {
    // medidas
    width: 90%;

    // posicionamento
    margin-top: 15px;
  }

  .edit {
    //display
    display: flex;
    align-items: center;
    justify-content: center;

    // meidas
    width: 26%;
    height: 30px;

    // posicionamento
    transform: translateY(-12px);
    margin-left: 60%;
  }
}
</style>