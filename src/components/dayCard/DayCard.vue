<script setup lang="ts">
import type { IDay } from '@/interfaces'

import { useDiaryStore } from '@/stores/diary'
import { HandleDate, HandleMarkdown } from '@/utils'
import { useRouter } from 'vue-router';

const props = defineProps<IDay>()

const diary = useDiaryStore()
const router = useRouter()

const markdown = new HandleMarkdown()

const deleteDay = () => diary.DeleteDay(props.date)
const openCard = () => router.push(`/diary/${ props.date.getTime() }`)
</script>

<template>
  <button class="day-card" @click="openCard">
    <div class="date">
      <p>{{ HandleDate.changeToBrazilianDate(props.date) }}</p>
      <p>{{ HandleDate.changeToBrazilianHour(props.date) }}</p>
    </div>
    <div
      class="content"
      v-html="markdown.render(props.content)"
    ></div>
    <button @click="deleteDay">Delete</button>
  </button>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .day-card {
    text-align: justify;
    width: 98%;
    max-height: 33vh;
    background-color: white;
    border-radius: 1rem;
    margin-top: 5px;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    align-items: center;

    // impedir o encolhimento por estar dentro de um container display flex
    flex-shrink: 0;

    .content {
      width: 100%;
      height: 100%;
    }
  }
}
</style>