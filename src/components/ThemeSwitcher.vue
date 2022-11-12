<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { useVModel } from '@nanostores/vue'
import { settings } from '@/stores/setting'

const BsIcon = defineAsyncComponent(() => import('@/components/BsIcon.vue'))
const themeSetting = useVModel(settings, 'theme')
const themeIcon = computed(() => themeSetting.value === 'dark' ? 'moon-fill' : 'sun-fill')
const changeTheme = () => {
  if (themeSetting.value === 'dark') {
    themeSetting.value = 'light'
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  } else {
    themeSetting.value = 'dark'
    document.documentElement.classList.remove('light')
    document.documentElement.classList.add('dark')
  }
}
</script>

<template>
  <button type="button" class="p-4"  @click="changeTheme">
    <BsIcon :icon="themeIcon" :size="20" />
  </button>
</template>
