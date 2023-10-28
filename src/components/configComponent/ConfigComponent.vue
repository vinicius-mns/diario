<script setup lang="ts">
import CloseButton from '@/components/closeButton/CloseButton.vue';
import SwitchButton from '@/components/switchbutton/SwitchButton.vue';
import { useStore } from '@/stores'

const store = useStore()
const style = store.use.local.style()
const user = store.use.remote.user()

const { state: { configComponent: confCom } } = store.use.widget.topbar()

const setEspecialColor = (event: Event) => {
  const color = (event.target as HTMLInputElement).value
  style.changeEspecialColor(color)
}

const logout = () => user.logout()

</script>

<template>
  <div class="blur" v-if="confCom.show">
    <div class="config-component">
      <CloseButton :close="confCom.toggleShow" />

      <hr>

      <div class="options-container">
        <div class="option">
          <SwitchButton
            title="Modo escuro"
            :togglebutton="style.toggleDarkMode"
            :state="style.value.darkMode"
          />
        </div>

        <div class="option">
          <div class="especial-color-container">
            <div><p>Cor em destaque</p></div>
            <div class="color">
              <input @input="setEspecialColor" type="color" name="color" id="color">
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="options-container">
        <div class="option">
          <SwitchButton
            title="Data no card"
            :togglebutton="style.toggleDateOnCard"
            :state="style.value.dateOnCard"
          />
        </div>
      </div>

      <div class="options-container">
        <div class="option">
          <button @click="logout">Sair</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .blur {
    // posicionamento
    position: fixed;

    // tamanhos
    width: 100%;
    height: 100vh;

    // blur e cores
    background: v-bind('style.value.pageColor'), 0.1;
    backdrop-filter: blur(7.7px);

    // display
    display: flex;
    align-items: center;
    justify-content: center;

    & .config-component {
      // display
      display: flex;
      flex-direction: column;
      align-items: center;
      
      // medidas
      width: 90%;
      min-height: 50vh;

      // estilo
      color: v-bind('style.value.textColor');
      background-color: v-bind('style.value.pageColor');
      border-radius: v-bind('style.value.borderRadius');
      box-shadow: v-bind('style.value.boxShadow');

      // animacao
      transition: all 0.5s;

      // posicionamento (importante para o posicionamento do closebutton)
      position: relative;

      hr {
        opacity: 0;
        padding: 0;
        width: 100%;
        margin: 20px;
      }

      h2 {
        margin: 0;
        padding: 0;
        background-color: red;
      }

      & p {
        margin: 0;
        padding: 0;
        font-size: 18px;
      }

      & .options-container {
        //medidas
        width: 98%;

        // display
        display: flex;
        flex-direction: column;
        align-items: center;

        & .option {
          // medidas
          width: 96%;
          margin: 8px;

          display: flex;
          justify-content: center;

          & .especial-color-container {
            // display
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            // medidas
            width: 100%;
            
            & input {
              cursor: pointer;
              width: 100%;
              opacity: 0;
            }
  
            & .color {
              // estilo
              background-color: v-bind('style.value.especialColor');
              border-radius: v-bind('style.value.borderRadius');
  
              // medidas
              height: 28px;
              aspect-ratio: 3;
            }
          }
        }
      }
    }
  }
}
</style>@/stores/handleCards/api@/stores/style/style@/stores/local/style@/stores/handleCard/handleConfig