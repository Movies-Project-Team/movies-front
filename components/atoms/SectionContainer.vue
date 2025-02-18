<script setup lang="ts">
import Box from './Box.vue';
import Flex from './Flex.vue';

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <Flex direction="column">
    <h2
      class="header-text" 
      :style="{
        fontSize: '28px', 
        fontWeight: '600', 
        textShadow: '0 2px 1px rgba(0, 0, 0, .3)',
      }"
    >{{ title }}</h2>
    <Flex >
      <slot />
    </Flex>
  </Flex>
</template>

<style scoped>
</style>
