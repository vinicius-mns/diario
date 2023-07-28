<script setup lang="ts">
import { useDiaryStore } from '@/stores/diary';
import { useMarkdownStore } from '@/stores/markdown';
import { ref } from 'vue';
import { useStyle } from '@/stores/style';

const sideButtons = ref(false)

const markdownStore = useMarkdownStore()
const diary = useDiaryStore()
const style = useStyle()

const send = () => {
  const content = markdownStore.state
  diary.createOrUpdate(content)
  sideButtons.value = false
  markdownStore.state = ''
}

const initMessageDay = () => {
  const today = diary.getLastToday()
  if(today) markdownStore.state = today.content
  sideButtons.value = true
}

const close = () => {
  sideButtons.value = false
  markdownStore.state = ''
}
</script>

<template>
  <div class="text-editor-container">
    <textarea
      v-model="markdownStore.state"
      placeholder="Digite aqui"
      @focus="initMessageDay"
    ></textarea>
    <div class="side-buttons" v-show="sideButtons">
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
    
    // medidas
    width: 100%;
    min-height: 64px;
    
    // estilo
    background-color: v-bind('style.value.pageColor');
    box-shadow: v-bind('style.value.boxShadow');

    // display
    display: flex;
    align-items: center;
    justify-content: center;

    & textarea {
      // estilo
      border-radius: 2rem;
      background-color: v-bind('style.value.baseColor');
      box-shadow: v-bind('style.value.boxShadow');
      color: v-bind('style.value.textColor');

      // medidas
      width: 90%;
      height: 40px;
      left: 2%;
      font-size: 1rem;
      box-sizing: border-box;
      padding: 1rem;

      // transicao quando :focus acontecer
      transition: 0.5s all;

      // remove valores padros do textarea
      resize: none;
      border: none;
      outline: none;
    }

    & textarea:focus {
      border-radius: 1rem;
      height: 158px;
    }

    & .side-buttons {
      height: 20vh;
      width: 20%;
      
      // display
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;

      & button {
        // medidas
        height: 6vh;
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