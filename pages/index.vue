<script setup lang="ts">
import { useSwiper } from '#imports'
import { Button } from 'primevue';
import { ref } from 'vue'
import { EffectFade } from 'swiper/modules';
import Box from '~/components/atoms/Box.vue';
import Flex from '~/components/atoms/Flex.vue';
import Tag from '~/components/atoms/Tag.vue';
import SectionContainer from '~/components/atoms/SectionContainer.vue';
import MovieList from '~/components/molecules/MovieList.vue';
import RankingContainer from '~/components/molecules/RankingContainer.vue';
import { useWindowWidth } from '@/composables/resize/windowWidth';
import WatchContinuteList from '~/components/molecules/WatchContinuteList.vue';

const slides = ref([
  {
    id: 1,
    src: 'https://image.tmdb.org/t/p/original/odVlTMqPPiMksmxpN9cCbPCjUPP.jpg',
    poster: 'https://image.tmdb.org/t/p/original/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg',
    alt: 'Slide 1',
    title: 'Solo Leveling',
    imdb: 8.5,
    model: 'T16',
    releaseYear: 2023,
    totalEpisodes: 12,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A gothic tale of obsession between a haunted young woman and the terrifying vampire infatuated with her, causing untold horror in its wake.',
  },
  {
    id: 2,
    src: 'https://image.tmdb.org/t/p/original/b85bJfrTOSJ7M5Ox0yp4lxIxdG1.jpg',
    poster: 'https://image.tmdb.org/t/p/original/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg',
    alt: 'Slide 2',
    title: 'Sonic the Hedgehog 3',
    imdb: 9.1,
    model: 'T16',
    releaseYear: 2022,
    totalEpisodes: 24,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'Sonic, Knuckles, and Tails reunite against a powerful new adversary, Shadow, a mysterious villain with powers unlike anything they have faced before. With their abilities outmatched in every way, Team Sonic must seek out an unlikely alliance in hopes of stopping Shadow and protecting the planet',
  },
  {
    id: 3,
    src: 'https://image.tmdb.org/t/p/original/xZm5YUNY3PlYD1Q4k7X8zd2V4AK.jpg',
    poster: 'https://image.tmdb.org/t/p/original/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg',
    alt: 'Slide 3',
    title: 'Back in Action',
    imdb: 7.8,
    model: 'T16',
    releaseYear: 2021,
    totalEpisodes: 10,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'Fifteen years after vanishing from the CIA to start a family, elite spies Matt and Emily jump back into the world of espionage when their cover is blowns.',
  },
  {
    id: 4,
    src: 'https://image.tmdb.org/t/p/original/5OsiT39OiZNdD0v2LiAcI2TpSYj.jpg',
    poster: 'https://image.tmdb.org/t/p/original/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg',
    alt: 'Slide 4',
    title: 'Severance',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'They say whatever doesn’t kill you makes you stronger, but that’s not the case for the world’s weakest hunter Sung Jinwoo. After being brutally slaughtered by monsters in a high-ranking dungeon, Jinwoo came back with the System, a program only he could see, that’s leveling him up in every way. Now, he’s inspired to discover the secrets behind his powers and the dungeon that spawned them.',
  },
  {
    id: 5,
    src: 'https://image.tmdb.org/t/p/original/z1buWt3MeqamyzVbKggLtlG1rZV.jpg',
    poster: 'https://image.tmdb.org/t/p/original/bEcFBnDwUXXDizdaR5EiC0qRhS3.jpg',
    alt: 'Slide 4',
    title: 'Drifting Away',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
  },
  {
    id: 6,
    src: 'https://image.tmdb.org/t/p/original/rDa3SfEijeRNCWtHQZCwfbGxYvR.jpg',
    poster: 'https://image.tmdb.org/t/p/original/1GvBhRxY6MELDfxFrete6BNhBB5.jpg',
    alt: 'Slide 4',
    title: 'Kraven the Hunter',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
  },
  {
    id: 7,
    src: 'https://image.tmdb.org/t/p/original/n5FPNMJ0eRoiQrKGfUQQRAZeaxg.jpg',
    poster: 'https://image.tmdb.org/t/p/original/tlliQuCupf8fpTH7RAor3aKMGy.jpg',
    alt: 'Slide 4',
    title: 'Silo',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
  },
  {
    id: 8,
    src: 'https://image.tmdb.org/t/p/original/87mebbBtoWzHV0kILgV6M7yIfun.jpg',
    poster: 'https://image.tmdb.org/t/p/original/1QdXdRYfktUSONkl1oD5gc6Be0s.jpg',
    alt: 'Slide 4',
    title: 'Squid Game',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
  },
  {
    id: 9,
    src: 'https://image.tmdb.org/t/p/original/uKb22E0nlzr914bA9KyA5CVCOlV.jpg',
    poster: 'https://image.tmdb.org/t/p/original/2E1x1qcHqGZcYuYi4PzVZjzg8IV.jpg',
    alt: 'Slide 4',
    title: 'Wicked',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
  },
  {
    id: 10,
    src: 'https://image.tmdb.org/t/p/original/qSOMdbZ6AOdHR999HWwVAh6ALFI.jpg',
    poster: 'https://image.tmdb.org/t/p/original/v313aUGmMNj6yNveaiQXysBmjVS.jpg',
    alt: 'Slide 4',
    title: 'Alarum',
    imdb: 8.0,
    model: 'T16',
    releaseYear: 2020,
    totalEpisodes: 16,
    genres: ['Chính Kịch', 'Tình Cảm', 'Cổ Trang', 'Lãng Mạn'],
    description: 'A solitary cat, displaced by a great flood, finds refuge on a boat with various species and must navigate the challenges of adapting to a transformed world together.',
  },
])

const screenWidth = useWindowWidth();

const swiperCreativeRef = ref(null)
useSwiper(swiperCreativeRef, {
  modules: [EffectFade], 
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
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
              <img 
                :src="slide.src"
                :alt="slide.alt"
                style="width: 100%; height: calc(100vh - 40px); object-fit: cover;" 
                provider="netlify"
              />
              <Flex direction="column" justify="center" class="slide-content">
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
                  label="Xem ngay"
                  icon="pi pi-play-circle"
                  aria-label="Filter" 
                  :style="{
                    width: '170px',
                    padding: '15px 31px',
                  }"/>
              </Flex>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </div>
    </div>
    <Box :style="{ padding: '0px 50px', marginBottom: '60px' }">
      <SectionContainer :title="'Xem tiếp'">
        <WatchContinuteList :data="slides"/>
      </SectionContainer>
      <SectionContainer :title="'Bảng xếp hạng'" :style="{display: screenWidth <= 900 ? 'none' : 'flex'}">
        <RankingContainer :data="slides"/>
      </SectionContainer>
      <SectionContainer :title="'Phim mới'">
        <MovieList :data="slides"/>
      </SectionContainer>
    </Box>
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
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0px 70px!important;
  background: linear-gradient(to right,  rgba(34,31,31,1) 0%,rgba(34,31,31,0.4) 100%);
  color: #fff;
  padding: 1rem;
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
