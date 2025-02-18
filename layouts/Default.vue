<script setup lang="ts">
import Header from '@/components/molecules/Header.vue';
import Footer from '@/components/molecules/Footer.vue';
</script>

<template>
  <div>
    <Header 
      :style="{
        position: 'absolute',
        zIndex: '9999',
        top: '0',
        left: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
      }"
    />
    <slot />
    <Footer />
  </div>
</template>

<style scoped></style>
