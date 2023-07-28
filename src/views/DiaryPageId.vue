<script setup lang="ts">
import MarkdownView from '@/components/markdownView/MarkdownView.vue';
import { useDiaryStore } from '@/stores/diary';
import { useStyle } from '@/stores/style';
import { HandleDate } from '@/utils';
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const state = reactive({ content: '', date: '' })

const diary = useDiaryStore()
const route = useRoute()
const router = useRouter()
const style = useStyle()

onMounted(() => {
  const { id } = route.params
  const findDay = diary.getDay(Number(id))

  if(!findDay) router.push('/notFound')
  
  if(findDay) {
    state.content = findDay.content
    state.date = HandleDate.changeToBrazilianDate(new Date(findDay.date))
  }
})
</script>

<template>
  <div class="render-day">
    <header>
      <RouterLink to="/diary"><button class="back">Voltar</button></RouterLink>
      <div class="date"><p>{{ state.date }}</p></div>
    </header>
    <main class="content">
      <MarkdownView :content="state.content" />
    </main>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .render-day {
    // display
    display: flex;
    flex-direction: column;

    & header {
      // medidias
      width: 100%;
      height: 48px;

      // display
      display: flex;
      align-items: center;
      justify-content: center;

      // posicao
      position: fixed;
      top: 0;

      // estilo
      background-color: v-bind('style.value.pageColor');
      box-shadow: v-bind('style.value.boxShadow');

      & .back {
        // posicao
        position: absolute;
        left: 20px;

        // medidas
        top: calc( ( 48px - 32px ) /2 );
        width: 20%;
        height: 32px;
  
        // estilo
        color: v-bind('style.value.textColor');
        background-color: v-bind('style.value.baseColor');
        border-radius: v-bind('style.value.borderRadius');
  
        // button estilo
        border: none;
        cursor: pointer;
      }

      & .date {
        color: v-bind('style.value.especialColor');
      }
    }

    & main {
      // posicao
      padding-top: 50px;
      padding-top: 50px;

      // medidas
      width: 100%;
      min-height: calc( 100vh - 50px );

      // display
      display: flex;
      flex-direction: column;
      align-items: center;
      
      // estilo
      background-color: v-bind('style.value.baseColor');
    }
  }
}
</style>