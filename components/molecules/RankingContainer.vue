<script setup lang="ts">
import Flex from '../atoms/Flex.vue';
import MovieRankingList from '@/components/molecules/MovieRankingList.vue';

const props = defineProps<{
  data: Movie[];
}>();
</script>

<template>
  <Flex :style="{ width: '100%', height: 'auto', borderRadius: '8px', border: '1px solid #fff2' }">
    <Flex direction="column" gap="10px" :style="{ width: '25%', borderRight: '1px solid #fff2', padding: '24px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '13px', fontWeight: '600' }">LƯỢT XEM</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
    <Flex direction="column" gap="10px" :style="{ width: '25%', borderRight: '1px solid #fff2', padding: '24px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '13px', fontWeight: '600' }">LƯỢT XEM</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
    <Flex direction="column" gap="10px" :style="{ width: '25%', borderRight: '1px solid #fff2', padding: '24px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '13px', fontWeight: '600' }">LƯỢT XEM</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
    <Flex direction="column" gap="10px" :style="{ width: '25%', padding: '24px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '13px', fontWeight: '600' }">LƯỢT XEM</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
  </Flex>
</template>

<style scoped></style>
