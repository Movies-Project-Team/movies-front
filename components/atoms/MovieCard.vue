<script setup lang="ts">
import Box from './Box.vue';
import Flex from './Flex.vue';

const props = defineProps<{
  data: Movie;
  isVer2?: boolean
  pos?: number
}>();

</script>

<template>
  <Flex :direction="isVer2 ? 'row' : 'column'" align="center" :justify="isVer2 ? 'flex-start' : 'center'" gap="12px">
    <Box
      :style="{
        fontWeight: '700',
        fontSize: '18px',
        opacity: '.3'
      }"
      v-if="isVer2"
      v-bind="$attrs"
    >
      {{ pos }}.
    </Box>
    <Box :style="{ position: 'relative' }">
      <img 
        :src="data.poster" 
        :alt="data.poster" 
        :style="{ 
          width: isVer2 ? '25px' : '221px',
          borderRadius: isVer2 ? '0px' : '8px'
        }"
      >
      <Box
        v-if="!isVer2"
        :style="{
          position:'absolute',
          bottom: '15px',
          left: '50%',
          transform: 'translateX(-50%)',
          overflow: 'hidden',
          background: '#5e6070',
          borderRadius: '.3rem .3rem 0 0',
          boxShadow: '0 0 5px 2px rgba(0, 0, 0, .1)',
          padding: '0 6px'
        }"
      >
        <h1 
          :style="{
            textAlign: 'center',
            fontSize: '10px'
          }"
        >P.Đề</h1>
      </Box>
    </Box>
    <h4 
      :style="{ 
        fontSize: isVer2 ? '12px' : '14px',
      }"
    >
      {{ data.title }}
    </h4>
  </Flex>
</template>

<style scoped></style>
