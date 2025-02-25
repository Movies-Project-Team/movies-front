<script setup lang="ts">
import Flex from '../atoms/Flex.vue';
import MovieCard from '../atoms/MovieCard.vue';

const props = defineProps<{
  data: Movie[];
}>();
</script>

<template>
  <Flex gap="35px" wrap="wrap" justify="center" align="center">
    <MovieCard v-for="movie in data" :data="movie"/>
  </Flex>
</template>

<style scoped></style>
