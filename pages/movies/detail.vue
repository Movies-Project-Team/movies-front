<script setup lang="ts">
import Box from '~/components/atoms/Box.vue';
import Flex from '~/components/atoms/Flex.vue';
import Tag from '~/components/atoms/Tag.vue';
import DetailInfoTab from '~/components/molecules/DetailInfoTab.vue';

</script>

<template>
  <Box
    :style="{
      padding: '150px 70px 100px'
    }"
  >
    <Flex gap="60px">
      <Flex
        direction="column"
        gap="10px"
        :style="{
          width: '40%',
          height: '200px',
        }"
      >
        <h1
          :style="{
            color: '#ffffff',
            margin: '10px 0px!important'
          }"
        >
          Solo Leveling: Tôi thăng cấp một mình
        </h1>
        <Flex
          gap="10px"
          :style="{
            height: '26px'
          }"
        >
          <Tag 
            :content="7.1"
            :sub-content="'IMBd'" 
            :type="'imdb'" 
          />
          <Tag 
            :content="'T12'"
            :type="'background'" 
          />
          <Tag 
            :content="2024"
          />
          <Tag 
            :content="'Phần 1'"
          />
          <Tag 
            :content="'Tập 12'"
          />
        </Flex>
        <Flex
          gap="10px"
          :style="{
            height: '26px'
          }"
        >
          <Tag 
            :content="'Hành Động'"
            :type="'topic'" 
          />
          <Tag 
            :content="'Viễn Tưởng'"
            :type="'topic'" 
          />
          <Tag 
            :content="'Phiêu Lưu'"
            :type="'topic'" 
          />
          <Tag 
            :content="'Khoa Học'"
            :type="'topic'" 
          />
        </Flex>
        <Flex direction="column" gap="10px">
          <p :style="{ margin: '4px 0px!important' }">
            <span :style="{ fontWeight: '700' }">Đạo diễn: </span>
            Chưa cập nhật
          </p>
          <p :style="{ margin: '4px 0px!important' }">
            <span :style="{ fontWeight: '700' }">Diễn viên: </span>
            Taito Ban, Genta Nakamura, Haruna Mikawa
          </p>
        </Flex>
        <Box>
          <p :style="{ margin: '4px 0px!important' }">
            <span :style="{ fontWeight: '700' }">Giới thiệu: </span>
            Thợ săn hạng E Jinwoo Sung là người yếu nhất trong số họ. Bị mọi người coi thường, anh ta không có tiền, không có khả năng nói và không có triển vọng công việc nào khác. Vì vậy, khi nhóm của anh ấy tìm thấy một hầm ngục ẩn giấu, anh ấy quyết tâm sử dụng cơ hội này để thay đổi cuộc sống của mình tốt hơn... nhưng cơ hội mà anh ấy tìm thấy hơi khác so với những gì anh ấy nghĩ trong đầu!
          </p>
        </Box>
        <Flex>
          <Button label="Xem phim" icon="pi pi-play" size="large"/>
        </Flex>
      </Flex>
      <Flex
        justify="center"
        :style="{
          position: 'relative',
          width: '60%',
        }"
      >
        <Box 
          :style="{
            position: 'absolute',
            width: '28%',
            height: '550px',
            left: '-35px',
            bottom: '45px',
            background: 'linear-gradient(270deg, rgba(25, 27, 36, 0) 0%, rgba(25, 27, 36, 0.2) 12%, rgba(25, 27, 36, 0.5) 25%, rgba(25, 27, 36, 0.7) 40%, rgba(25, 27, 36, 0.85) 55%, rgba(25, 27, 36, 0.95) 70%, rgb(25, 27, 36) 85%)'
          }"
        />
        <Box 
          :style="{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: '4px',
            bottom: '40px',
            background: 'linear-gradient(179deg, rgba(25, 27, 36, 0) 1%, rgba(25, 27, 36, 0.2) 10%, rgba(25, 27, 36, 0.5) 40%, rgba(25, 27, 36, 0.7) 50%, rgba(25, 27, 36, 0.85) 65%, rgba(25, 27, 36, 0.95) 80%, rgb(25, 27, 36) 100%)'
          }"
        />
        <Box
          :style="{
            width: '100%',
          }"
        >
          <img src="https://img.ophim.live/uploads/movies/thang-cap-mot-minh-poster.jpg" alt="" :style="{ width: '100%', height: '90%' }">
        </Box>
      </Flex>
    </Flex>
    <DetailInfoTab />
  </Box>
</template>

<style scoped>
</style>
