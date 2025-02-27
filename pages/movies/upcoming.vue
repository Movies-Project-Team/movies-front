<script setup lang="ts">
import Flex from '~/components/atoms/Flex.vue';
import MonthBox from '~/components/atoms/MonthBox.vue';
import MovieListV2 from '~/components/molecules/MovieListV2.vue';
import { useGetListUpcoming } from '~/composables/api/movies/use-get-list-upcoming';

const loading = useLoadingStore();
const months = Array.from({ length: 12 }, (_, i) => `Tháng ${i + 1}`);
const params = ref({
  "primary_release_date.gte": "2025-01-01",
  "primary_release_date.lte": "2025-01-31",
  "with_origin_country": "VN|US|KR|TH",
  "with_original_language": "vi|en|ko|th",
})
const { data, refetch } = useGetListUpcoming(params);

const selectMonth = (monthIndex: number) => {
  const year = new Date().getFullYear();
  const firstDay = new Date(year, monthIndex, 1).toISOString().split("T")[0];
  const lastDay = new Date(year, monthIndex + 1, 0).toISOString().split("T")[0];

  params.value = {
    ...params.value,
    "primary_release_date.gte": firstDay,
    "primary_release_date.lte": lastDay,
  };

  refetch();
  
  // loading
  loading.show();

  setTimeout(() => {
    loading.hide();
  }, 2000);
};
</script>

<template>
  <Flex 
    direction="column" 
    gap="40px"
    :style="{
      padding: '150px 70px 100px'
    }"
  >
    <h1 :style="{ margin: '4px 0px' }">Phim sắp chiếu</h1>
    <Flex gap="20px">
      <MonthBox v-for="(month, index) in months" :key="index" :label="month" @click="selectMonth(index)" />
    </Flex>
    <Flex>
      <MovieListV2 :data="data?.results ?? []" />
    </Flex>
  </Flex>
</template>
