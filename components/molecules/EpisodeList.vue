<script setup lang="ts">
import Box from '../atoms/Box.vue';
import Flex from '../atoms/Flex.vue';

const activeItem = ref<number | null>(0);
const setActive = (index: number) => {
  activeItem.value = index;
};
</script>

<template>
  <Box>
    <Flex
      gap="10px"
      wrap="wrap"
    >
      <Flex
        v-for="(episode, index) in 70"
        justify="center"
        align="center"
        @click="setActive(index)"
        :key="index"
        :style="{
          opacity: activeItem === index ? '1' : '.8',
          backgroundColor: activeItem === index ? '#ffd875' : '#282b3a',
          width: '146px',
          height: '50px',
          borderRadius: '0.5rem',
          cursor: 'pointer',
        }"
        @mouseover="(e) => e.currentTarget.style.opacity = '0.7'"
        @mouseleave="(e) => e.currentTarget.style.opacity = '1'"
      > 
        <Flex 
          align="center"
          justify="center"
          :style="{
            fontSize: '0.875rem',
            gap: '0.5rem',
            color: activeItem === index ? '#191b24' : '#fff',
          }"
        >
          <i 
            class="pi pi-sort-down-fill" 
            :style="{
              fontSize: '1.2rem',
              color: activeItem === index ? '#191b24' : '#fff',
              transform: 'rotate(270deg)'
            }"/>
          Tập: {{ episode }}
        </Flex>
      </Flex>
    </Flex>
  </Box>
</template>

<style scoped></style>
