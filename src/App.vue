<script setup lang="ts">
const title = 'Vite template for Vue 3, TypeScript, and TailwindCSS'
const description = 'An open-source Vite template for Vue 3, TypeScript and TailwindCSS. Dark mode enabled, auto-import enabled, persistent localStorage enabled using Nano Stores'
const url = import.meta.env.VITE_BASE_URL
const imageURL = `${url}/og_image.png`
const author = 'Tri Le Minh'
const pubDate = (new Date()).toISOString()

useHead({
  meta: [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'og:site_name',
      content: title,
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:url',
      content: url,
    },
    {
      name: 'og:title',
      content: title,
    },
    {
      name: 'og:description',
      content: description,
    },
    {
      name: 'og:image',
      content: imageURL,
    },
    {
      name: 'og:image:alt',
      content: description,
    },
    {
      name: 'og:locale',
      content: 'en',
    },
    {
      name: 'twitter:site',
      content: '@ansidev',
    },
    {
      name: 'twitter:creator',
      content: '@ansidev',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
    {
      name: 'twitter:url',
      content: url,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image:src',
      content: imageURL,
    },
    {
      name: 'robots',
      content: 'follow, index',
    },
    {
      name: 'author',
      content: author,
    },
    {
      name: 'article:published_time',
      content: pubDate,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: url,
    }
  ]
})
const count = ref(0)
</script>

<template>
  <Header />
  <div class="container flex flex-col space-y-4 justify-center items-center h-screen px-4 mx-auto max-w-xl"
    style="height: calc(100vh - 84px);">
    <div class="flex justify-center items-center space-x-4">
      <a href="https://vitejs.dev" title="Vite logo" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" width="96" height="96" />
      </a>
      <a href="https://vuejs.org/" title="Vue logo" target="_blank">
        <img src="/vue.svg" class="logo" alt="Vue logo" width="104" height="96" />
      </a>
      <a href="https://tailwindcss.com/" title="TailwindCSS logo" target="_blank">
        <img src="/tailwind.svg" class="logo" alt="TailwindCSS logo" width="128" height="96" />
      </a>
    </div>
    <h1><code class="code">Vite</code> + <code class="code">Vue</code> + <code class="code">TailwindCSS</code></h1>
    <button class="border rounded-sm px-4 py-2 hover:bg-gray-300 hover:border-gray-300 hover:text-gray-700"
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
.logo {
  height: 6em;
  padding: 1.5em;
}
</style>
