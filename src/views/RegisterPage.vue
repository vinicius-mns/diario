<script setup lang="ts">
</script>

<template>
  <main class="register-container">
    <div>
      <h1>Cria sua conta:</h1>
    </div>
    <form @submit.prevent="onSubmit">
      <div>
        <label for="username"></label>
        <input
          type="text"
          id="email"
          v-model="content.email"
          placeholder="Email"
        />
      </div>
      <div>
        <label for="password"></label>
        <input
          type="password"
          id="password"
          v-model="content.password"
          placeholder="Senha"
        />
      </div>
      <div>
        <label for="password"></label>
        <input
          type="password"
          id="password2"
          v-model="content.password2"
          placeholder="Repetir senha"
        />
      </div>
      <button type="submit">Criar conta</button>
    </form>
  </main>
</template>