<script setup lang="ts">
import { useDiaryStore } from '@/stores/diary';
import { useMarkdownStore } from '@/stores/markdown';
import { onMounted, ref } from 'vue';
import { useStyle } from '@/stores/style';

const editOn = ref(false)
const textActionButton = ref('Criar')
const textArea = ref<HTMLElement>()

const markdownStore = useMarkdownStore()
const diary = useDiaryStore()
const style = useStyle()

const send = () => {
  const content = markdownStore.state
  diary.createOrUpdate(content)
  editOn.value = false
  markdownStore.state = ''
  textActionButton.value = 'Editar'
}

const openEditDay = () => {
  const today = diary.getLastToday()
  if(today) markdownStore.state = today.content

  editOn.value = true
  setTimeout(() => textArea.value?.focus() ,1)
}

const close = () => {
  editOn.value = false
  markdownStore.state = ''
}

onMounted(() => {
  const lastDay = diary.getLastToday() 

  if(lastDay){
    const todayAlreadyExists = diary.compareDateOfToday(new Date(lastDay.date)).sameDay()
    if( todayAlreadyExists ) { textActionButton.value = 'Editar' }
  }
})
</script>

<template>
  <div class="text-editor-container">
    <textarea
      v-model="markdownStore.state"
      placeholder="Digite aqui"
      @blur="textArea?.focus()"
      ref="textArea"
      v-if="editOn"
    ></textarea>

    <button
      v-else @click="openEditDay"
      class="actionButton"
    >{{ textActionButton }}</button>

    <div class="side-buttons" v-show="editOn">
      <button @click="close" class="cancel"></button>
      <button class="send" @click="send">
        <div class="sendIco"></div>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .text-editor-container {
    // posicao
    position: fixed;
    bottom: 0;
    padding-bottom: 12px;
    padding-top: 5px;
    
    // medidas
    width: 100%;
    min-height: 50px;
    
    // estilo
    background-color: v-bind('style.value.pageColor');
    box-shadow: v-bind('style.value.boxShadow');

    // display
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    .actionButton {
      // medidas
      margin-top: 7px;
      height: 40px;
      width: 50%;

      // estilo
      border-radius: 100px;
      background-color: v-bind('style.value.baseColor');
      box-shadow: v-bind('style.value.boxShadow');
      color: v-bind('style.value.especialColor');
      border: solid 1px;
      border-color: v-bind('style.value.especialColor');
    }

    & textarea {
      // estilo
      border-radius: v-bind('style.value.borderRadius');
      background-color: v-bind('style.value.baseColor');
      box-shadow: v-bind('style.value.boxShadow');
      color: v-bind('style.value.textColor');

      // medidas
      font-size: 1rem;
      height: 158px;
      width: 80%;

      // necessario para que o padding nao quebre
      box-sizing: border-box;
      padding: 1rem;

      // transicao quando :focus acontecer
      transition: 0.5s all;

      // remove valores padros do textarea
      resize: none;
      border: none;
      outline: none;
    }

    & .side-buttons {
      height: 158px;
      width: 12%;
      
      // display
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      & button {
        // medidas
        width: 100%;
        max-width: 50px;
        margin-top: 12px;
        aspect-ratio: 1;
        
        // estilo
        border-radius: 50%;

        // button estilo
        border: none;
        cursor: pointer;
      }

      & .send {
        //estilo
        background-color: v-bind('style.value.baseColor');
        box-shadow: v-bind('style.value.boxShadow');
        
        & .sendIco {
          width: 100%;
          height: 100%;
          clip-path: polygon(30% 45%, 25% 20%, 90% 50%, 25% 80%, 30% 55%,50% 50%);
          background-color: v-bind('style.value.especialColor');
        }
      }

      & .cancel {
        position: relative;
        background-color: v-bind('style.value.baseColor');
        box-shadow: v-bind('style.value.boxShadow');

        $width: 8%;
        $heigth: 60%;

        &::after, &::before {
          content: '';
          position: absolute;

          width: $width;
          margin-left: calc( ( 100% - $width ) / 2 );

          height: $heigth;
          margin-top: calc( ( 100% - $heigth ) / 2 );

          top: 0;
          left: 0;
          border-radius: 10px;
          background-color: v-bind('style.value.especialColor');
          transform: rotate(45deg) 
        }
        &::before { transform: rotate(-45deg) }
      }
    }
  }

  @keyframes on-mount {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>