import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import TailwindCss from '@tailwindcss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Vue from '@vitejs/plugin-vue'
import VueComponents from 'unplugin-vue-components/vite'
const __dirname = dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@/': `${resolve(__dirname, 'src')}/`,
    },
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),

    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        'vue',
        {
          '@vueuse/head': [
            'createHead',
            'useHead',
          ],
        },
        {
          '@nanostores/persistent': [
            'persistentAtom',
            'persistentMap',
          ],
        },
        {
          '@nanostores/vue': [
            'useStore',
            'useVModel',
            'mapStores',
          ],
        },
      ],
      dts: 'src/auto-imports.d.ts',
      dirs: [
        'src/libs',
        'src/stores',
      ],
      vueTemplate: true,
    }),

    // https://github.com/antfu/unplugin-vue-components
    VueComponents({
      dirs: [
        'src/components',
      ],

      // allow auto load markdown components under `./src/components/`
      extensions: ['vue'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/],

      dts: 'src/components.d.ts',
    }),

    TailwindCss(),
  ]
})
