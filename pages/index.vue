<script setup lang="ts">
import { useSwiper } from '#imports'
import { Button } from 'primevue';
import { ref } from 'vue'
import Box from '~/components/atoms/Box.vue';
import Flex from '~/components/atoms/Flex.vue';
import Tag from '~/components/atoms/Tag.vue';

const slides = ref([
  {
    id: 1,
    src: 'https://image.tmdb.org/t/p/original/zOpe0eHsq0A2NvNyBbtT6sj53qV.jpg',
    alt: 'Slide 1',
    title: 'Sonic the Hedgehog 3',
    imdb: 8.5,
    model: 'T16',
    releaseYear: 2023,
    totalEpisodes: 12,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet.',
  },
  {
    id: 2,
    src: 'https://image.tmdb.org/t/p/original/blSthAPRbEOJBowdxppeQqNPRh9.jpg',
    alt: 'Slide 2',
    title: 'SAKAMOTO DAYS',
    imdb: 9.1,
    model: 'T16',
    releaseYear: 2022,
    totalEpisodes: 24,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'Once the greatest hitman of all, Taro Sakamoto retired in the name of love. But when his past catches up, he must fight to protect his beloved family.',
  },
  {
    id: 3,
    src: 'https://image.tmdb.org/t/p/original/lJuQBW4w1x6NgD514xDPqZ2Lbpz.jpg',
    alt: 'Slide 3',
    title: 'The Apothecary Diaries',
    imdb: 7.8,
    model: 'T16',
    releaseYear: 2021,
    totalEpisodes: 10,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'Maomao lived a peaceful life with her apothecary father. Until one day, she sold as a lowly servant to the emperor palace. But she wasn meant for a compliant life among royalty. So when imperial heirs fall ill, she decides to step in and find a cure This catches the eye of Jinshi, a handsome palace official who promotes her. Now, she making a name for herself solving medical mysteries',
  },
  {
    id: 4,
    src: 'https://image.tmdb.org/t/p/original/j45FEq8BPUJDVm3cGIQye0tqPpL.jpg',
    alt: 'Slide 4',
    title: 'Goosebumps',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.',
  },
  {
    id: 5,
    src: 'https://image.tmdb.org/t/p/original/b3mdmjYTEL70j7nuXATUAD9qgu4.jpg',
    alt: 'Slide 4',
    title: 'Flow',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
  },
])

const swiperCreativeRef = ref(null)

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
              <NuxtImg 
                :src="`${slide.src}`"
                :alt="`${slide.alt}`" 
                style="width: 100%; height: 810px; border-radius: 8px;" 
                fit="cover"
                loading="lazy"
                />
              <div class="overlay"></div>
              <Flex direction="column" class="slide-content">
                <h2 
                  :style="{
                    fontSize: '60px'
                  }"
                >
                  {{ slide.title }}
                </h2>
                <Flex gap="10px" direction="column"> 
                  <Flex gap="8px">
                    <Tag :content="slide.imdb" :sub-content="'IMBd'" :type="'imdb'"/>
                    <Tag :content="slide.model" :type="'background'"/>
                    <Tag :content="slide.releaseYear" :type="'classic'"/>
                    <Tag :content="slide.totalEpisodes" :sub-content="'Tập'" :type="'classic'"/>
                  </Flex>
                  <Flex gap="8px">
                    <Tag v-for="(genre, index) in slide.genres" :key="index" :content="genre" :type="'topic'"/>
                  </Flex>
                  <Box 
                    :style="{
                      fontSize: '1rem',
                      lineHeight: 1.6,
                      color: '#fff',
                      textShadow: '0 1px 1px rgba(0, 0, 0, .2)',
                      fontWeight: 400,
                      marginBottom: '2rem',
                    }"
                  >
                    {{ slide.description }}
                  </Box>
                </Flex>
                <Button 
                  icon="pi pi-play" 
                  rounded 
                  aria-label="Filter" 
                  :style="{
                    width: '70px',
                    height: '70px',
                    background: 'linear-gradient(39deg, #ffb300, #ffcc66)'
                  }"/>
              </Flex>
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
  position: relative;
  font-size: 18px;
  font-size: 4rem;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
  height: 15vh;
  background-color: #202331;
}

.swiper-wrapper {
  display: flex;
  flex-direction: column;
}

.swiper-basic .swiper-wrapper {
  min-width: 100vh;
  width: 100vh;
}

.slide-content {
  position: absolute;
  top: 45%;
  left: 20px;
  transform: translateY(-50%);
  max-width: 700px;
  width: 100%;
  padding: 100px 50px;
  color: #fff;
  padding: 1rem;
  border-radius: 8px;
  z-index: 9999;
}

.slide-title {
  font-size: 1.5rem;
  margin: 0 0 0.5rem;
  font-weight: bold;
}

.slide-description {
  font-size: 1rem;
  margin: 0;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg, 
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.4) 20%,
    transparent 50%,
    rgba(0, 0, 0, 0.4) 80%,
    rgba(0, 0, 0, 0.8) 100%
  );
  z-index: 1;
  border-radius: 8px;
}

.slide-title {
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.slide-imdb,
.slide-release-year,
.slide-total-episodes,
.slide-genres,
.slide-description {
  font-size: 1rem;
  margin: 0.2rem 0;
}
</style>
