<script setup lang="ts">
import Box from '~/components/atoms/Box.vue';
import Flex from '~/components/atoms/Flex.vue';
import Tag from '~/components/atoms/Tag.vue';
import DetailInfoTab from '~/components/molecules/DetailInfoTab.vue';

const props = defineProps<{
  data: {
    label: string;
    items: string[];
  };
}>();

const tagItems = [
  { content: 7.1, subContent: "IMBd", type: "imdb" },
  { content: "T12", type: "background" },
  { content: 2024 },
  { content: "Phần 1" },
  { content: "Tập 12" }
];

const genreItems = [
  { content: "Hành Động", type: "topic" },
  { content: "Viễn Tưởng", type: "topic" },
  { content: "Phiêu Lưu", type: "topic" },
  { content: "Khoa Học", type: "topic" }
];
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
          Captain America: Thế Giới Mới
        </h1>
        <Flex
          gap="10px"
          :style="{
            height: '26px'
          }"
        >
          <Tag
            v-for="(tag, index) in tagItems"
            :key="index"
            :content="tag.content"
            :sub-content="tag.subContent"
            :type="tag.type"
          />
        </Flex>
        <Flex
          gap="10px"
          :style="{
            height: '26px'
          }"
        >
          <Tag
            v-for="(genre, index) in genreItems"
            :key="index"
            :content="genre.content"
            :type="genre.type"
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
            Sau khi gặp Tổng thống Hoa Kỳ mới đắc cử Thaddeus Ross, Sam Wilson thấy mình bị cuốn vào một sự cố . Anh phải khám phá lý do đằng sau một âm mưu cực kì xấu xa trước khi kẻ chủ mưu thật sự khiến cả thế giới phải hoảng sợ
          </p>
        </Box>
        <Flex :style="{ marginTop: '20px' }" gap="10px">
          <Button label="Xem phim" icon="pi pi-play"/>
          <Button label="Yêu thích" icon="pi pi-heart" :style="{ background: 'rgb(45, 47, 52)', border: 'none' }" />
          <Button label="Xem sau" icon="pi pi-bookmark" :style="{ background: 'rgb(45, 47, 52)', border: 'none' }"  />
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
        <!-- Box góc trên bên phải -->
        <Box
          :style="{
            position: 'absolute',
            width: '16%',
            height: '100%',
            right: '0',
            top: '0',
            background: 'linear-gradient(90deg, rgba(25, 27, 36, 0) 0%, rgba(25, 27, 36, 0.4) 20%, rgba(25, 27, 36, 0.7) 50%, rgba(25, 27, 36, 0.9) 80%, rgb(25, 27, 36) 100%)'
          }"
        />
        <!-- Box phía trên -->
        <Box
          :style="{
            position: 'absolute',
            width: '100%',
            height: '100px',
            top: '0',
            background: 'linear-gradient(180deg, rgb(25, 27, 36) 0%, rgba(25, 27, 36, 0.6) 60%, rgba(25, 27, 36, 0) 100%)'
          }"
        />
        <Box
          :style="{
            width: '100%',
          }"
        >
          <NuxtImg src="http://image.tmdb.org/t/p/original/qfAfE5auxsuxhxPpnETRAyTP5ff.jpg" alt="" :style="{ width: '100%', height: '90%' }" />
        </Box>
      </Flex>
    </Flex>
    <DetailInfoTab />
  </Box>
</template>

<style scoped>
</style>
