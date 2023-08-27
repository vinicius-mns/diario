<script setup lang="ts">
const props = defineProps({
  height: {
    type: String,
    default: '28px',
  },
  title: {
    type: String,
    default: ''
  },
  state: {
    type: Boolean,
    default: false,
  },
  togglebutton: {
    type: Function,
    default: (): void => {},
  },
})
</script>

<template>
  <div class="switch-container">
    <p>{{ title }}</p>
    <button class="toggle-button" @click="togglebutton()" :class="JSON.stringify(state)">
      <div class="indicator" :class="JSON.stringify(state)">
        <div class="circle"></div>
      </div>
    </button>
  </div>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .switch-container {
    // medidas
    width: 100%;

    // display
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      margin: 0;
      padding: 0;
      font-size: 18px;
    }

    & .toggle-button {
      // medidas
      height: v-bind('props.height');
      aspect-ratio: 2;
      margin: 0;
      padding: 0;
  
      // estilo
      background-color: rgba(0, 0, 0, 0.5);
      border: none;
      border-radius: 50px;
      cursor: pointer;
  
      // display
      display: flex;
      align-items: center;
  
      & .indicator {
        // medidas
        height: 100%;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
      
        // display
        display: flex;
        align-items: center;
        justify-content: center;
  
        // estilo
        background-color: transparent;
        
        // animation
        transition: 0.2s all;
      
        & .circle {
          // medidas
          height: 58%;
          aspect-ratio: 1;
  
          // estilo
          border-radius: 50%;
          font-size: calc(v-bind('props.height') * 1);
          background-color: white;
        }
      }
  
      & .true {
        margin-left: 50%;
      }
    }

    & .true {
      background-color: rgb(113, 171, 113);
    }
  }
}
</style>