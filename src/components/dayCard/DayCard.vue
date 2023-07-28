<script setup lang="ts">
import type { IDay } from '@/interfaces'
import { useStyle } from '@/stores/style';
import { HandleDate } from '@/utils'
import { useRouter } from 'vue-router';

import MarkdownView from '../markdownView/MarkdownView.vue';

const props = defineProps<IDay>()

const style = useStyle()
const router = useRouter()

const openCard = () => router.push(`/diary/${ props.date.getTime() }`)
</script>

<template>
  <button class="day-card" @click="openCard">
    <div class="header">
      <p>{{ HandleDate.changeToBrazilianDate(props.date) }}</p>
    </div>
    <MarkdownView :content="props.content" />
  </button>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .day-card {
    // estilo
    border-radius: v-bind('style.value.borderRadius');
    background-color: v-bind('style.value.baseColor');
    box-shadow: v-bind('style.value.boxShadow');
    color: v-bind('style.value.textColor');

    // medidas
    width: 96%;
    max-height: 68vh;
    margin-top: 15px;

    // diaplay
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
  
    // impedir o encolhimento por estar dentro de um container display flex
    flex-shrink: 0;

    // botao valores
    border: none;
    cursor: pointer;
    transition: all 0.5s;

    & .header {
      // medidas
      width: 100%;

      // display
      display: flex;
      justify-content: center;
    }

    & p {
      color: v-bind('style.value.especialColor');
    }
  }
}
</style>