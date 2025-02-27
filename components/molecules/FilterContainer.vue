<script setup lang="ts">
import ActiveList from '../atoms/ActiveList.vue';

const filterDataList = [
  {
    label: "Thể loại",
    items: ["Tất cả", "Hành động", "Kinh dị", "Hài", "Viễn tưởng", "Tình cảm", "Tâm lý", "Hoạt hình", "Khoa học viễn tưởng"],
  },
  {
    label: "Quốc gia",
    items: ["Tất cả", "Mỹ", "Hàn Quốc", "Nhật Bản", "Trung Quốc", "Việt Nam", "Anh", "Pháp"],
  },
  {
    label: "Năm phát hành",
    items: ["Tất cả", "2024", "2023", "2022", "2021", "Trước 2020"],
  },
  {
    label: "Đánh giá",
    items: ["Tất cả", "⭐ 5 sao", "⭐ 4 sao", "⭐ 3 sao", "⭐ 2 sao", "⭐ 1 sao"],
  },
  {
    label: "Trạng thái phim",
    items: ["Tất cả", "Đang chiếu", "Sắp chiếu", "Hoàn thành"],
  },
  {
    label: "Loại phim",
    items: ["Tất cả", "Phim lẻ", "Phim bộ", "Phim chiếu rạp", "Phim hoạt hình"],
  },
];

</script>

<template>
  <div class="card">
    <Fieldset legend="Bộ lọc" :toggleable="true">
      <div v-for="(data, index) in filterDataList" :key="index">
        <ActiveList :data="data" />
        <Divider style="--p-divider-border-color: #ffffff10"/>
      </div>   
      <Button :style="{ width: '200px', marginTop: '20px' }" icon="pi pi-arrow-right" label="Lọc kết quả" aria-label="Filter" />
    </Fieldset>
  </div>
</template>

<style scoped>
</style>
