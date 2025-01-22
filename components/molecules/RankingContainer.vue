<script setup lang="ts">
import Flex from '../atoms/Flex.vue';
import MovieRankingList from '@/components/molecules/MovieRankingList.vue';

const props = defineProps<{
  data: Movie[];
}>();
</script>

<template>
  <Flex :style="{ width: '100%', height: '380px', borderRadius: '8px', border: '1px solid #fff' }">
    <Flex direction="column" gap="10px" :style="{ width: '25%', borderRight: '1px solid #fff', padding: '12px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '16px', fontWeight: '600' }">Lượt xem</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
    <Flex direction="column" gap="10px" :style="{ width: '25%', borderRight: '1px solid #fff', padding: '12px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '16px', fontWeight: '600' }">Lượt xem</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
    <Flex direction="column" gap="10px" :style="{ width: '25%', borderRight: '1px solid #fff', padding: '12px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '16px', fontWeight: '600' }">Lượt xem</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
    <Flex direction="column" gap="10px" :style="{ width: '25%', padding: '12px 32px' }">
      <Flex gap="8px">
        <i class="pi pi-eye" />
        <span :style="{ fontSize: '16px', fontWeight: '600' }">Lượt xem</span>
      </Flex>
      <MovieRankingList :data="data"/>
    </Flex>
  </Flex>
</template>

<style scoped></style>
