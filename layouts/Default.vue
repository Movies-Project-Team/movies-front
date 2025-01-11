<script setup lang="ts">
import Header from '@/components/molecules/Header.vue';
</script>

<template>
  <div 
    :style="{
      padding: '0 2rem'
    }"
  >
    <Header />
    <slot />
  </div>
</template>

<style scoped></style>
