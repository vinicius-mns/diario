<script setup lang="ts">
import MarkdownView from '@/components/markdownView/MarkdownView.vue';
import type { ICard } from '@/interfaces';
import { useStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps<{
  get: 'local' | 'remote'
}>()

const store = useStore()
const style = store.use.local.style()
const cards = store.use[props.get].cards()

const cardRender = ref<ICard>({content: '', date: 0})

const route = useRoute()

onMounted(async () => {
  const id = route.params.id

  if(typeof id === 'string'){
    const card = await cards.getOne(id)
    cardRender.value = card
  }
})
</script>

<template>
  <div class="render-day">
    <header>
      <RouterLink to="/diary"><button class="back">Voltar</button></RouterLink>
      <div class="date"><p>{{ cardRender.date }}</p></div>
    </header>
    <main class="content">
      <MarkdownView :content="cardRender.content" />
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
</style>@/stores/style/style@/stores/local/style