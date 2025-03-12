<script setup lang="ts">
import { useSwiper } from '#imports'
import { ref } from 'vue'
import MovieCardHorizon from '../atoms/MovieCardHorizon.vue';

const props = defineProps<{
  data: Movie[];
}>();

const swiperCreativeRef = ref(null)
useSwiper(swiperCreativeRef, {
  modules: [], 
  slidesPerView: 6,
  spaceBetween: '20',
  creativeEffect: {
    prev: {
      translate: ['-125%', 0, -800],
      rotate: [0, 0, -90],
    },
    next: {
      translate: ['125%', 0, -800],
      rotate: [0, 0, 90],
    },
  },
})

</script>

<template>
  <ClientOnly>
    <swiper-container ref="swiperCreativeRef" :style="{ width: '100%' }" class="swiper-creative" :loop="true" :init="false">
      <swiper-slide
        v-for="movie in data"
        :key="`slide-creative-${movie.id}`"
        class="swiper-slide"
        :style="{ width: '221px!important' }"
      >
        <MovieCardHorizon :data="movie"/>
      </swiper-slide>
    </swiper-container>
  </ClientOnly>
</template>

<style scoped></style>
