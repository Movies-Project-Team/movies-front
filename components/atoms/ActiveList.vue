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

const activeItem = ref<number | null>(null);
const setActive = (index: number) => {
  activeItem.value = index;
};
</script>

<template>
  <Box>
    <Flex gap="40px" :style="{ padding: '16px 20px', fontSize: '15px' }">
      <span :style="{ color: '#ffffff', fontWeight: 700, width: '150px' }">{{ data.label }}: </span> 
      <Flex gap="20px">
        <span
          v-for="(item, index) in data.items"
          :key="index"
          @click="setActive(index)"
          :style="{
            color: activeItem === index ? 'yellow' : '#fff',
            opacity: activeItem === index ? '1' : '.8'
          }"
        >
          {{ item }}
        </span>
      </Flex>
    </Flex>
  </Box>
</template>

<style scoped></style>
