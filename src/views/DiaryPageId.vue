<script setup lang="ts">
import { useDiaryStore } from '@/stores/diary';
import { reactive } from 'vue'
import { useRoute } from 'vue-router';

const state = reactive({ content: '', date: '' })

const diary = useDiaryStore
const route = useRoute()

</script>

<template>
  <div class="render-day">
    <div>{{ state.date }}</div>
    <div>{{ state.content }}</div>
    <RouterLink to="/diary"><button>Voltar</button></RouterLink>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .render-day {
    position: absolute;
    height: 100vh;
    width: 100%;
    background-color: white;
    z-index: 100;
  }
}
</style>