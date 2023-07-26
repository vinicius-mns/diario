<script setup lang="ts">
import MarkdownView from '@/components/markdownView/MarkdownView.vue';
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
    <MarkdownView :content="state.content" />
    <RouterLink to="/"><button>Voltar</button></RouterLink>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .render-day {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
  }
}
</style>