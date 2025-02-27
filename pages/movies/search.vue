<script setup lang="ts">
import Flex from '~/components/atoms/Flex.vue';
import FilterContainer from '~/components/molecules/FilterContainer.vue';
import MovieListV2 from '~/components/molecules/MovieListV2.vue';
import { MovieService } from '@/services/DummnyDataMovie';

const slides = ref(MovieService.getMultiMovieData(3));
</script>

<template>
  <Flex 
    direction="column" 
    gap="40px"
    :style="{
      padding: '150px 70px 100px'
    }"
  >
    <h1 :style="{ margin: '4px 0px' }">Tìm kiếm</h1>
    <FilterContainer />
    <MovieListV2 :data="slides" />
  </Flex>
</template>

<style scoped></style>
