<script setup lang="ts">
import AnimatedBackground from '@/components/AnimatedBackground.vue';
import Header from '@/components/Header.vue';
import ProjectsContent from './components/ProjectsContent.vue';
</script>

<template>
  <div id="development" class="fixed top-0 left-0 w-full h-full overflow-hidden text-lime-700">
    <AnimatedBackground />
    <Header />
    <ProjectsContent />
  </div>
</template>
