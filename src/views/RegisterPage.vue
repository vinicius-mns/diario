<script setup lang="ts">
const style = useStyle()

const remember = ref(false)

const toggleRemember = () => {
  remember.value = !remember.value
  console.log(remember.value)
}
</script>

<template>
  <main class="register-container">
    <form @submit.prevent="onSubmit" class="form">
      <div class="title">
        <h1>Crie sua conta</h1>
      </div>

      <div class="mini-form">
        <label for="username"></label>
        <input
          type="text"
          id="email"
          v-model="content.email"
          placeholder="Email"
        />
      </div>
      <div class="mini-form">
        <label for="password"></label>
        <input
          type="password"
          id="password"
          v-model="content.password"
          placeholder="Senha"
        />
      </div>
      <div class="mini-form">
        <label for="password"></label>
        <input
          type="password"
          id="password2"
          v-model="content.password2"
          placeholder="Repetir senha"
        />
      </div>
      <div class="mini-form">
        <SwitchButton title="Lembrar de mim" :togglebutton="toggleRemember" :state="remember"/>
      </div>
      <button type="submit"><p>Criar conta</p></button>
      <RouterLink to="/login">Já possuo uma conta</RouterLink>
    </form>
  </main>
</template>

<style scoped lang="scss">
@media screen and (max-width: 700px) {
  .register-container {
    // estilo
    color: v-bind('style.value.textColor');

    // medidas
    height: 100vh;
    width: 100%;

    // display
    display: flex;
    align-items: center;
    justify-content: center;

    & .form {
      // display
      display: flex;
      flex-direction: column;
      align-items: center;

      // estilo
      background-color: v-bind('style.value.baseColor');
      box-shadow: v-bind('style.value.boxShadow');
      border-radius: v-bind('style.value.borderRadius');
      overflow: hidden;

      // medidas
      width: 90%;

      & .title {
        // estilo
        background-color: v-bind('style.value.especialColor');
        background-color: v-bind('style.value.baseColor');

        // medidas
        height: 50px;
        width: 100%;

        // display
        display: flex;
        align-items: center;
        justify-content: center;

        & h1 {
          margin: 0;
          padding: 0;
          font-size: large;
        }
      }

      & .mini-form {
        // display
        display: flex;
        flex-direction: column;
        align-items: center;

        // medidas
        width: 90%;
        margin-top: 20px;
        
        & input {
          // medidas
          width: 100%;
          height: 42px;
          font-size: 16px;

          // estilo
          background-color: v-bind('style.value.pageColor');
          color: v-bind('style.value.textColor');
          border-radius: 4px;
          text-indent: 30px;
          outline: none;
          border: none;
        }

        & input::placeholder {
          color: v-bind('style.value.textColor');
          opacity: 55%;
        }
      }

      & button {
        // medidas
        width: 90%;
        height: 38px;

        // posicionamento
        margin-top: 20px;
        margin-bottom: 20px;
        
        // estilo
        color: white;
        background-color: rgb(82, 82, 199);
        border-radius: 4px;
        border: none;
        box-shadow: black 4px 4px;
        cursor: pointer;

        & p {
          margin: 0;
          padding: 0;
          font-size: 18px;
        }
      }

      & button:active {
        box-shadow: 0px 0px;
        transform: translate(4px, 4px);
      }
    }

    & a {
      color: v-bind('style.value.textColor');
      margin-bottom: 5px;
    }
  }
}
</style>
