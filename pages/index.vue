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
import { MovieService } from '~/services/DummnyDataMovie';

const slides = ref(MovieService.getMovieData());

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
              <NuxtImg 
                :src="slide.src"
                :alt="slide.alt"
                style="width: 100%; height: calc(100vh - 40px); object-fit: cover;" 
                loading="lazy"
              />
              <Flex direction="column" justify="center" class="slide-content">
                <h2 
                  :style="{
                    fontSize: '52px'
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
