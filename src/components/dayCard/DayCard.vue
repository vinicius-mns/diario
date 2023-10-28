<script setup lang="ts">
import type { ICard } from '@/interfaces'
import { HandleDate } from '@/utils'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from '@/stores'

const store = useStore()
const style = store.use.local.style()

import MarkdownView from '../markdownView/MarkdownView.vue';

const props = defineProps<ICard>()

const router = useRouter()
const route = useRoute()

const openCard = () => router.push(`${ route.fullPath }/${ props.date }`)
const parseDate = new Date(props.date)
</script>

<template>
  <div class="day-card">
    <header class="header">
      <p v-if="style.value.dateOnCard">{{`
        ${ HandleDate.changeToBrazilianDate(parseDate) }
        - ${ HandleDate.getWeek(parseDate) }
      `}}</p>
    </header>
    <div class="content">
      <button @click="openCard">
        <MarkdownView :content="props.content" />
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .day-card {
    // medidas
    width: 92%;
    max-height: 68vh;
    margin-top: 28px;
    font-size: 1rem;
    
    
    & .content {
      //medidas
      width: 100%;

      & button {
        // estilo
        border-radius: v-bind('style.value.borderRadius');
        background-color: v-bind('style.value.baseColor');
        box-shadow: v-bind('style.value.boxShadow');

        border: none;
  
        // medidas
        width: 100%;
        padding-left: 20px;
        padding-right: 20px;
        max-height: 500px;
        overflow: hidden;
        
        // display
        display: flex;
        flex-direction: column;
      }
    }

    & .header {
      // medidas
      width: 50%;
      margin-bottom: 8px;

      // display
      display: flex;
      justify-content: center;

      & p {
        color: v-bind('style.value.textColor');
        opacity: 50%;
        font-size: 13px;
        margin: 0;
        padding: 0;
      }
    }
  }
}
</style>