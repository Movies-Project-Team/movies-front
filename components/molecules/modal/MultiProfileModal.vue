<script setup lang="ts">
import { Dialog } from 'primevue';
import ProfileCard from '../ProfileCard.vue';
import Flex from '~/components/atoms/Flex.vue';
import Box from '~/components/atoms/Box.vue';

const props = defineProps<{
  visible: boolean;
}>();

const localVisible = ref(props.visible);
const emit = defineEmits(["update:visible"]);

const profileData = ref([
  {
    image: 'https://www.goldderby.com/wp-content/uploads/2022/11/Wednesday-Netflix-cast-Jenna-Ortega.jpg?w=620',
    name: 'Profile 1',
    password: '1234'
  },
  {
    image: 'https://hips.hearstapps.com/hmg-prod/images/jenna-ortega-emma-myers-wednesday-1669382193.jpg?crop=0.449xw:0.893xh;0.475xw,0&resize=640:*',
    name: 'Profile 2',
    password: '1234'
  },
]);
</script>

<template>
 <Dialog
    v-model:visible="localVisible"
    modal
    header="Chào mừng trở lại!"
    :style="{
      minHeight: '280px',
      padding: '38px 70px 45px 70px',
      width: '580px',
    }"
    @hide="emit('update:visible', false)"
  >
    <template #container="{ closeCallback }">
      <Flex direction="column" gap="20px" :style="{ position: 'relative!important' }">
        <Box :style="{ position: 'absolute!important' }">
          <Button icon="pi pi-angle-left" variant="text" rounded aria-label="Cancel" @click="closeCallback"/>
        </Box>
        <Flex direction="column" gap="10px" align="center">
          <img src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo_sin.svg" alt="" :style="{ width: '40px', height: '40px', objectFit: 'cover' }">
          <h5
            :style="{
              color: '#00031C',
              fontSize: '21px',
              fontWeight: '700',
              margin: '0px'
            }"
          >Ai đang xem vậy!!</h5>
        </Flex>
        <Flex justify="space-around">
          <ProfileCard v-for="profile in profileData" :profile="profile"/>
        </Flex>
      </Flex>
    </template>
  </Dialog>
</template>

<style scoped></style>
