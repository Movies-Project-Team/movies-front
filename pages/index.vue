<script setup lang="ts">
import { useSwiper } from '#imports'
import { ref } from 'vue'

const slides = ref([
  {
    id: 1,
    src: 'https://image.tmdb.org/t/p/original/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg',
    alt: 'Slide 1',
  },
  {
    id: 2,
    src: 'https://image.tmdb.org/t/p/original/lJuQBW4w1x6NgD514xDPqZ2Lbpz.jpg',
    alt: 'Slide 2',
  },
  {
    id: 3,
    src: 'https://image.tmdb.org/t/p/original/n5FPNMJ0eRoiQrKGfUQQRAZeaxg.jpg',
    alt: 'Slide 3',
  },
  {
    id: 4,
    src: 'https://image.tmdb.org/t/p/original/dMloNvayweggmvv0UD0iOJIkkbH.jpg',
    alt: 'Slide 4',
  },
])

const swiperCreativeRef = ref(null)

/**
 * Pass in options to the useSwiper hook to customize the swiper instance
 * then automatically bind the swiper instance to the ref
 */
useSwiper(swiperCreativeRef, {
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
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
  <main>
    <div class="swiper-wrapper">
      <div class="swiper-wrapper__inner">
        <ClientOnly>
          <swiper-container ref="swiperCreativeRef" class="swiper-creative" :loop="true" :init="false">
            <swiper-slide
              v-for="slide in slides"
              :key="`slide-creative-${slide.id}`"
              class="swiper-slide"
            >
              <img :src="slide.src" :alt="slide.alt" style="width: 100%; height: 760px; border-radius: 8px;object-fit: cover;" />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>
  </main>
</template>

<style lang="css">
html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
}

#__nuxt {
  height: 100dvh;
  max-height: 100dvh;
  box-sizing: border-box;
}

main {
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
}

main > .swiper-wrapper:not(:last-child) {
  border-bottom: 1px solid #d9d9d9;
  padding-bottom: 2rem !important;
  margin-bottom: 2rem !important;
}

swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  height: 15vh; /* Adjust this to the desired height */
}

.swiper-wrapper {
  display: flex;
  flex-direction: column;
}

.swiper-basic .swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}
</style>
