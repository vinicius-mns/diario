<script setup lang="ts">
import { useDiaryStore } from '@/stores/diary';
import { HandleDate, HandleMarkdown } from '@/utils';
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const state = reactive({ content: '', date: '' })

const diary = useDiaryStore()
const route = useRoute()
const router = useRouter()
const markdown = new HandleMarkdown()

onMounted(() => {
  const { id } = route.params
  const findDay = diary.getDay(Number(id))

  if(!findDay) router.push('/notFound')
  
  if(findDay) {
    state.content = markdown.render(findDay.content)
    state.date = HandleDate.changeToBrazilianDate(new Date(findDay.date))
  }
})
</script>

<template>
  <div class="render-day">
    <div>{{ state.date }}</div>
    <div v-html="state.content"></div>
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