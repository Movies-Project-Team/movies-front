<script setup lang="ts">
import Box from './Box.vue';
import Flex from './Flex.vue';

const props = defineProps<{
  data: Movie;
}>();

</script>

<template>
  <Flex 
    :direction="'column'"
  >
    <img 
      :src="data.src" 
      :alt="data.src" 
      :style="{
        width: '290px',
        height: '170px',
        borderRadius: '8px',
        objectFit: 'cover'
      }"
    >
    <h4 
      :style="{ 
        fontSize: '14px',
      }"
    >
      {{ data.title }}
    </h4>
  </Flex>
</template>

<style scoped></style>
