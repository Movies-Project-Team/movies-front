<script setup lang="ts">
import Flex from '~/components/atoms/Flex.vue';
import FilterContainer from '~/components/molecules/FilterContainer.vue';
import MovieListV2 from '~/components/molecules/MovieListV2.vue';
import { useGetListMovie } from '~/composables/api/movies/use-get-list-movie';
import Pagination from '~/components/molecules/Pagination.vue';

const loading = useLoadingStore();
const route = useRoute();
const router = useRouter();
const params = ref({
  "item": 21,
  "page": Number(route.query.page) || 1,
  "keyword": '',
});
const currentPage = ref(Number(route.query.page) || 1);
const totalPages = computed(() => data.value?.paginate.totalPages ?? 1);
const { data, refetch, isLoading } = useGetListMovie(params);

watch(() => route.query.page, (newPage) => {
  const pageNumber = Number(newPage) || 1;
  params.value.page = pageNumber; 
  currentPage.value = pageNumber;
  refetch();
});

const setLoading = () => {
  loading.show();
  setTimeout(() => {
    loading.hide();
  }, 2000);
};

const changePage = (page: number) => {
  if (page < 1 || page > totalPages.value) return;

  params.value.page = page;
  currentPage.value = page;
  router.push({ query: { ...route.query, page } });
  refetch();
  setLoading();
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
    <h1 :style="{ margin: '4px 0px' }">Tìm kiếm</h1>
    <FilterContainer />
    <MovieListV2 :data="data?.data" />
    <Pagination v-if="!isLoading" :currentPage="currentPage" :totalPages="totalPages" @changePage="changePage" />
  </Flex>
</template>

<style scoped></style>
