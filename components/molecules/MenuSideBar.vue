
<script setup>
import { ref } from 'vue';

const items = ref([
  {
      label: 'Trang chủ',
  },
  {
      label: 'Phim lẻ',
  },
  
  {
      label: 'Phim bộ',
  },
  {
      label: 'Quốc gia',
      items: [
          {
              label: 'Việt Nam',
          },
          {
              label: 'Mỹ',
          },
          {
              label: 'Hàn Quốc',
          },
      ]
  },
  {
      label: 'Diễn viên',
  }
  ,
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

