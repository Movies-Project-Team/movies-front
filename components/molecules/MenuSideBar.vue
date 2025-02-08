<script setup>
import { ref, computed } from 'vue';
import { useGetListGenres } from '~/composables/api/util/use-get-list-genres';
import { useGetListLanguage } from '~/composables/api/util/use-get-list-language';

const { data: languageResponse } = useGetListLanguage();
const { data: genresResponse } = useGetListGenres();

const formatData = (response) => {
  const list = response.value?.data?.map(item => ({
    label: item.title
  })) || [];
  
  return list.length > 12 
    ? [...list.slice(0, 12), { label: 'Xem thêm' }] 
    : list;
};

const languageData = computed(() => formatData(languageResponse));
const genresData = computed(() => formatData(genresResponse));

const items = ref([
  {
    label: 'Trang chủ',
  },
  {
    label: 'Thể loại',
    items: genresData
  },
  {
    label: 'Quốc gia',
    items: languageData
  },
  {
    label: 'Diễn viên',
  },
  {
    label: 'Tin tức',
  }
]);
</script>

<template>
  <div class="card">
    <Menubar 
      :model="items"
      :style="{
        background: 'none',
        border: 'none',
        color: '#fff',
      }" 
    />
  </div>
</template>
