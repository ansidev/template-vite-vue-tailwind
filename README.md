# TypeScript + Vite + Vue 3 + Tailwind

This template should help get you started developing with Vue 3, TailwindCSS and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Features

- [Vue 3](https://github.com/vuejs/core), [Vite 3](https://github.com/vitejs/vite), [pnpm](https://pnpm.io/), [ESBuild](https://github.com/evanw/esbuild)
- [Nano Store](https://github.com/nanostores/nanostores)
- [Tailwind CSS](https://tailwindcss.com) + [Light/Dark mode](./src/components/ThemeSwitcher.vue)
- Library and Vue Component auto importing
- Page Speed Optimized.
- SEO.
- Deploy on [Netlify](https://netlify.com), [Vercel](https://vercel.com) zero-config.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases, this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right-click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

## Try it now!

> This source code requires Node >=14.18

### Clone to local

If you prefer to do it manually with the cleaner git history

```bash
git clone git@github.com:ansidev/template-vite-vue-tailwind.git my-app
cd my-app
pnpm i # If you don't have pnpm installed, run: npm install -g pnpm
```

## Usage

### Development

Just run and visit http://localhost:5173

```bash
pnpm dev
```

### Build

To build the App, run

```bash
pnpm build
```

And you will see the generated file in `dist` that is ready to be served.

### Deploy on Netlify

Go to [Netlify](https://app.netlify.com/start) and select your clone, `OK` along the way, and your app will be live in a minute.

### Deploy on Vercel

Go to [Vercel](https://vercel.com/dashboard) and click `Add new` -> `Project`. Then, select your clone, `OK` along the way, and your app will be live in a minute.

## Contact

Le Minh Tri [@ansidev](https://ansidev.xyz/about).

## License

This source code is available under the [MIT License](/LICENSE).
