<script setup>
import { ref, onMounted } from "vue";

const showSplash = ref(false);

onMounted(() => {
  const hasVisited = localStorage.getItem("hasVisited");

  if (!hasVisited) {
    showSplash.value = true;
    setTimeout(() => {
      showSplash.value = false;
      localStorage.setItem("hasVisited", "true");
    }, 3000);
  }
});
</script>

<template>
  <div v-if="showSplash" class="splash-screen">
    <img src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo.svg" alt="Movie Logo" />
    <h1>Chào mừng bạn đến Phim Súc Vật</h1>
  </div>
</template>

<style scoped>
.splash-screen {
  position: fixed;
  width: 100%;
  height: 100vh;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 9999;
  transition: opacity 1s ease-out;
}
.splash-screen img {
  width: 200px;
  animation: fadeIn 2s ease-in-out;
}
.splash-screen h1 {
  margin-top: 10px;
  font-size: 24px;
  animation: fadeIn 3s ease-in-out;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
