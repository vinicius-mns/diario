<script setup lang="ts">
import DayCard from '@/components/dayCard/DayCard.vue'
import CoverW from '@/components/widgets/cover/CoverW.vue';
import TextEditorVue from '@/components/widgets/textEditor/TextEditor.vue';
import { useStore } from '@/stores'
import { onMounted } from 'vue';

export interface IDiaryProps {
  get: 'remote' | 'local'
}

const props = defineProps<IDiaryProps>()

const store = useStore()

const style = store.use.local.style()
const textEditor = store.use.widget.textEditor()

const { state, init } = store.use[props.get].cards()

onMounted(async () => {
  await init()
})
</script>

<template>
  <div class="container">
    <CoverW />
    <DayCard 
      v-for="({content, date}, i) in state.cards.value"
      :key="i"
      :content="content"
      :date="date"
    />
    <TextEditorVue />
    <button class="add-card" @click="textEditor.set.toggleShow">
      Adicionar
    </button>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .container {
    // display
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    
    // cores
    background-color: transparent;

    & .add-card {
      // medidas
      width: 90%;
      height: 45px;

      // posicionamento
      margin-top: 40px;

      // estilo
      background-color: v-bind('style.value.baseColor');
      color: v-bind('style.value.textColor');
      border: v-bind('style.value.textColor') dashed 1px;
      border-radius: v-bind('style.value.borderRadius');
      opacity: 50%;
    }

    // animacao
    transition: all 0.5s;
  }
}
</style>