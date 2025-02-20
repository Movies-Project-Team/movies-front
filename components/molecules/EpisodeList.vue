<script setup lang="ts">
import Box from '../atoms/Box.vue';
import Flex from '../atoms/Flex.vue';
</script>

<template>
  <Box>
    <Flex
      gap="10px"
      wrap="wrap"
    >
      <Flex
        v-for="episode in 20"
        justify="center"
        align="center"
        :key="episode"
        :style="{
          backgroundColor: '#282b3a',
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
            color: '#ffffff'
          }"
        >
          <i class="pi pi-play" style="font-size: 1.25rem"></i>
          Tập: {{ episode }}
        </Flex>
      </Flex>
    </Flex>
  </Box>
</template>

<style scoped></style>
