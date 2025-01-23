<script setup lang="ts">
import Flex from './Flex.vue';

const props = defineProps<{
  title: string;
}>();
</script>

<template>
  <Flex direction="column">
    <h2 :style="{ fontSize: '1.8em', fontWeight: '600', textShadow: '0 2px 1px rgba(0, 0, 0, .3)' }">{{ title }}</h2>
    <Flex >
      <slot />
    </Flex>
  </Flex>
</template>

<style scoped></style>
