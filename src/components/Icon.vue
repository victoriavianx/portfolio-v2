<script setup lang="ts">
type IconKind = 'IMAGE' | 'ICON';

defineProps<{
  iconName: string;
  kind: IconKind;
  description?: string | undefined;
  customStyle?: string;
}>();
</script>

<template>
  <div :class="customStyle">
    <img v-if="kind === 'IMAGE'" :src="`/images/${iconName}.png`" :alt="description" />
    <span v-else class="material-symbols-outlined">{{ iconName }}</span>
  </div>
</template>
