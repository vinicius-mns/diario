<script setup lang="ts">
import { reactive, ref } from 'vue';
import { useStore } from '@/stores'

const props = defineProps<{
  get: 'remote' | 'local'
}>()

const editorText = ref<HTMLElement>()

const store = useStore()

const style = store.use.local.style()
const cards = store.use[props.get].cards()

const state = reactive({
  text: () => {
    return cards.state.typeEditor.value === 'add'
      ? 'Adicionar'
      : 'Editar'
  }
})

const showEditor = reactive({
  state: false,
  toggle: () => showEditor.state = !showEditor.state
})

const send = () => {
  cards.createOrUpdateCard()
  showEditor.toggle()
}

const openEditor = () => {
  showEditor.toggle()
  const foco = () => editorText.value?.focus()
  setTimeout(foco);
}
</script>

<template>
  <div class="add-or-edit-container">
    <button
      @click="openEditor"
      class="add-or-edit-button"
      :class="cards.state.typeEditor.value"
      >
      <p>{{ state.text() }}</p>
    </button>

    <div class="text-editor-container" v-show="showEditor.state">
      <textarea
        v-model="cards.state.card.value.content"
        placeholder="Digite aqui"
        ref="editorText"
      ></textarea>

      <div class="side-buttons">
        <button @click="showEditor.toggle" class="cancel"></button>
        <button class="send" @click="send">
          <div class="sendIco"></div>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .add-or-edit-container {
    // medidas
    width: 100%;

    // posicionamento
    position: absolute;
    top: 66px;

    // display
    display: flex;
    align-items: center;
    justify-content: center;

    .add-or-edit-button {
      // estilo
      border: none;
      color: v-bind('style.value.especialColor');
      background-color: v-bind('style.value.baseColor');

      border: v-bind('style.value.especialColor') 1px solid;
    
      border-radius: v-bind('style.value.borderRadius');
    
      transition: all 0.2s;
    
      & {
        font-size: 15px;
        padding: 0;
        margin: 0;
      }
    }
    .add {
      //display
      display: flex;
      align-items: center;
      justify-content: center;
    
      // meidas
      width: 50%;
      height: 35px;
    
      // posicionamento
      margin-left: 40%;
    }
    
    .edit {
      //display
      display: flex;
      align-items: center;
      justify-content: center;
    
      // meidas
      width: 30%;
      height: 35px;
    
      // posicionamento
      margin-left: 62%;
    }

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

    @keyframes on-mount {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
}
</style>