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
    <div>{{ state.date }}</div>
    <MarkdownView :content="state.content" />
    <RouterLink to="/diary"><button class="back">Voltar</button></RouterLink>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .render-day {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    & .back {
      // posicao
      position: fixed;
      
      // medidas
      width: 50%;
      left: 25%;
      bottom: 30px;
      height: 40px;

      // estilo
      background-color: v-bind('style.value.baseColor');
      border-radius: v-bind('style.value.borderRadius');
      box-shadow: v-bind('style.value.boxShadow');

      overflow: hidden;

      // button estilo
      border: none;
      cursor: pointer;
    }
  }
}
</style>