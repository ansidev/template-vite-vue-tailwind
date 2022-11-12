<script setup lang="ts">
import { computed } from 'vue'
import icons from '@/libs/icon'

const props = defineProps({
  icon: {
    type: String,
    required: true,
    default: '',
  },
  size: {
    type: Number,
    default: 16,
  },
  fill: {
    type: String,
    default: 'currentColor',
  }
})

const iconData = computed(() => icons[props.icon] ?? '')
</script>

<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="size" :height="size" :fill="fill" :class="['bi', `bi-${icon}`]"
    viewBox="0 0 16 16" v-html="iconData" />
</template>
