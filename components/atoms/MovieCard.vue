<script setup lang="ts">
import Flex from './Flex.vue';

const props = defineProps<{
  data: Movie;
}>();
</script>

<template>
  <Flex direction="column" align="center" justify="center" :style="{ width: '221px' }">
    <img :src="data.poster" :alt="data.poster" :style="{ width: '100%', borderRadius: '8px' }">
    <h4 :style="{ fontSize: '16px' }">{{ data.title }}</h4>
  </Flex>
</template>

<style scoped></style>
