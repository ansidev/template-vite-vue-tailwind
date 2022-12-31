<script setup lang="ts">
const count = ref(0)
</script>

<template>
  <Header />
  <div class="container flex flex-col space-y-4 justify-center items-center h-screen px-4 mx-auto max-w-xl"
    style="height: calc(100vh - 84px);">
    <div class="flex justify-center items-center space-x-4">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" width="96" height="96" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="/vue.svg" class="logo" alt="Vue logo" width="104" height="96" />
      </a>
      <a href="https://tailwindcss.com/" target="_blank">
        <img src="/tailwind.svg" class="logo" alt="TailwindCSS logo" width="128" height="96" />
      </a>
    </div>
    <h1><code class="code">Vite</code> + <code class="code">Vue</code> + <code class="code">TailwindCSS</code></h1>
    <button class="border border-2 rounded px-4 py-2 hover:bg-gray-300 hover:border-gray-300 hover:text-gray-700"
      type="button" aria-label="Counter button" @click="count++">You click this button {{ count }} times</button>
    <p class="text-center">
      Edit
      <code class="code">src/App.vue</code> to test HMR.
    </p>
    <p class="text-center">
      Check out
      <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank">create-vue</a>,
      the official Vue + Vite starter.
    </p>
    <p class="text-center">
      Install
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      in your IDE for a better DX.
    </p>
    <p class="text-center">Click on the Vite, Vue and TailwindCSS logos to learn more.</p>
  </div>
</template>

<style lang="css">
a {
  @apply text-blue-500 hover:underline hover:decoration-dotted;
}

.code {
  @apply border rounded p-1 bg-gray-300 text-gray-700;
}

.logo {
  height: 6em;
  padding: 1.5em;
}
</style>
