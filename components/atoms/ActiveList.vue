<script setup lang="ts">
import Box from '../atoms/Box.vue';
import Flex from '../atoms/Flex.vue';
import { ref } from "vue";

const props = defineProps<{
  data: {
    label: string;
    items: string[];
  };
}>();

const activeItem = ref<number | null>(0);
const setActive = (index: number) => {
  activeItem.value = index;
};
</script>

<template>
  <Box>
    <Flex gap="40px" :style="{ padding: '16px 20px', fontSize: '15px' }">
      <Box :style="{ width: '10%' }">
        <span :style="{ color: '#ffffff', fontWeight: 700 }">{{ data.label }}: </span> 
      </Box>
      <Flex gap="20px" wrap="wrap" :style="{ width: '90%' }">
        <span
          v-for="(item, index) in data.items"
          :key="index"
          @click="setActive(index)"
          :style="{
            color: activeItem === index ? 'yellow' : '#fff',
            opacity: activeItem === index ? '1' : '.8',
            cursor: 'pointer'
          }"
        >
          {{ item }}
        </span>
      </Flex>
    </Flex>
  </Box>
</template>

<style scoped></style>
