<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <div class="container max-w-4xl flex flex-col space-y-4 justify-center items-center h-screen mx-auto">
    <div class="flex justify-center items-center space-x-4">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo" alt="Vue logo" />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img src="./assets/tailwind.svg" class="logo" alt="TailwindCSS logo" />
      </a>
    </div>
    <h1>Vite + Vue + TailwindCSS</h1>
    <button class="border border-2 rounded px-4 py-2 hover:bg-gray-300 hover:border-gray-300" type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code class="border rounded p-1 bg-gray-300">src/App.vue</code> to test HMR.
    </p>
    <p>
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>,
      the official Vue + Vite starter.
    </p>
    <p>
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX.
    </p>
    <p>Click on the Vite, Vue and TailwindCSS logos to learn more.</p>
  </div>
</template>

<style lang="css">
a {
  @apply text-blue-500 hover:underline hover:decoration-dotted;
}
.logo {
  height: 6em;
  padding: 1.5em;
}
</style>
