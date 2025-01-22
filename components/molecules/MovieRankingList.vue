<script setup lang="ts">
import MovieCard from '../atoms/MovieCard.vue';
import Flex from '../atoms/Flex.vue';

const props = defineProps<{
  data: Movie[];
}>();
</script>

<template>
  <ClientOnly>
    <Flex direction="column" align="flex-start" justify="flex-start">
      <MovieCard v-for="(movie, index) in data.slice(0, 4)" :data="movie" :is-ver2="true" :pos="index + 1" :key="movie.id"/>
    </Flex>
  </ClientOnly>
</template>

<style scoped></style>
