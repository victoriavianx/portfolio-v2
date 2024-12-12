<script setup lang="ts">
import { computed } from 'vue'

import router from '@/router'

import AnimatedBackground from './../../components/AnimatedBackground.vue'
import Header from './../../components/Header.vue'
import Opening from './components/Opening.vue'

const currentRoutePath = computed(() => {
  return router.currentRoute.value.path
})

console.log(currentRoutePath.value)
</script>

<template>
  <div id="front-page" class="fixed top-0 left-0 w-full h-full overflow-hidden text-lime-700">
    <AnimatedBackground />
    <Header />
    <Opening />
  </div>
</template>
