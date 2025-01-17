<script setup lang="ts">
import Flex from '../atoms/Flex.vue';
import PasswordProfileModal from '@/components/molecules/modal/PasswordProfileModal.vue';

const props = defineProps<{
  profile: {
    image: string;
    name: string;
    password: string;
  };
}>();

const isOpenPasswordModal = ref(false);
watch(isOpenPasswordModal, (newVal) => {
  console.log(newVal);
})
</script>

<template>
  <Flex direction="column" align="center" gap="8px" :style="{ width: '10rem', overflow: 'hidden', cursor: 'pointer' }" @click="isOpenPasswordModal = true">
    <img 
      :src="profile.image" 
      alt=""
      :style="{
        width: '120px',
        height: '120px',
        objectFit: 'cover'
      }"
    >
    <span :style="{ fontWeight: '700' }">{{ profile.name }}</span>
  </Flex>
  <PasswordProfileModal 
    v-if="isOpenPasswordModal" 
    :visible="isOpenPasswordModal" 
    :password="profile.password" 
    @update:visible="isOpenPasswordModal = $event"
  />
</template>

<style scoped>
</style>
