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
    <img 
      :src="data.poster" 
      :alt="data.poster" 
      :style="{ 
        width: isVer2 ? '40px' : '221px',
        borderRadius: isVer2 ? '0px' : '8px'
      }"
    >
    <h4 
      :style="{ 
        fontSize: isVer2 ? '12px' : '16px',
      }"
    >
      {{ data.title }}
    </h4>
  </Flex>
</template>

<style scoped></style>
