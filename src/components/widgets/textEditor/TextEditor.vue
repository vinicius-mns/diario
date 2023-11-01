<script setup lang="ts">
import { useStore } from '@/stores';

const store = useStore()
const style = store.use.local.style()
const state = store.use.widget.textEditor()
</script>

<template>
  <div class="text-editor-container" v-show="state.get.show">
    <textarea
      placeholder="Digite aqui"
      ref="editorText"
    ></textarea>

    <div class="side-buttons">
      <button @click="state.set.toggleShow" class="cancel"></button>
      <button class="send">
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
      z-index: 200;
      padding-bottom: 12px;
      padding-top: 5px;
      
      // medidas
      width: 100%;
      min-height: 50px;
      
      // estilo
      background-color: v-bind('style.value.pageColor');
      box-shadow: v-bind('style.value.boxShadow');

      // animacao
      transition: all 0.5s;

      // display
      display: flex;
      align-items: center;
      justify-content: space-evenly;

      .actionButton {
        // medidas
        margin-top: 7px;
        height: 40px;
        width: 50%;

        // display
        display: flex;
        justify-content: center;
        align-items: center;

        // estilo
        border-radius: v-bind('style.value.borderRadius');
        background-color: v-bind('style.value.baseColor');
        box-shadow: v-bind('style.value.boxShadow');
        color: v-bind('style.value.especialColor');
        border: none;

        // animation
        transition: all 0.5s;

        & p {
          font-size: 16px;
        }
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
            width: 90%;
            height: 90%;
            clip-path: polygon(30% 45%, 25% 20%, 90% 50%, 25% 80%, 30% 55%,50% 50%);
            background-color: v-bind('style.value.especialColor');
          }
        }

        & .cancel {
          position: relative;
          background-color: v-bind('style.value.baseColor');
          box-shadow: v-bind('style.value.boxShadow');

          $width: 4%;
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
}
</style>