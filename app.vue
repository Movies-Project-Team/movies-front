<script setup lang="ts">
import Loading from '@/components/global/loading/index.vue';
import SplashScreen from './components/molecules/SplashScreen.vue';
</script>

<template>
  <div>
    <NuxtLoadingIndicator />
    <SplashScreen />
    <NuxtLayout>
      <Loading/>
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>