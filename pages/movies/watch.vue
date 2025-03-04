<script setup lang="ts">
import Box from '~/components/atoms/Box.vue';
import CommentBox from '~/components/atoms/CommentBox.vue';
import Flex from '~/components/atoms/Flex.vue';
import Tag from '~/components/atoms/Tag.vue';
import EpisodeList from '~/components/molecules/EpisodeList.vue';
import { MovieService } from '~/services/DummnyDataMovie';

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

const serverItems = [
  { content: "Vietsub" },
  { content: "Thuyết minh" },
];

const activeItem = ref<number | null>(0);
const setActive = (index: number) => {
  activeItem.value = index;
};

const comment = ref('');

const comments = [
  {
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
    name: 'Onyama Limba',
    time: '11 ngày trước',
    comment: 'Làm sao để xem phim vậy mọi người? Bấm vào tập nó hiện mỗi cái poster phim xong chả có nút nủng gì ):',
    replies: [
      {
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
        name: 'Xuxu',
        time: '10 ngày trước',
        comment: 'Bấm vào góc phải có nút play đó bạn.',
        replies: [
          {
            avatar: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png',
            name: 'John',
            time: '9 ngày trước',
            comment: 'Chắc lỗi trình duyệt rồi.',
            replies: []
          }
        ]
      },
      {
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png',
        name: 'Jane',
        time: '10 ngày trước',
        comment: 'Bạn thử F5 lại xem sao?',
        replies: []
      }
    ]
  },
  {
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/xuxuefeng.png',
    name: 'Michael',
    time: '7 ngày trước',
    comment: 'Phim này có vietsub không mọi người?',
    replies: [
      {
        avatar: 'https://primefaces.org/cdn/primevue/images/organization/walter.jpg',
        name: 'Sarah',
        time: '6 ngày trước',
        comment: 'Có sub tiếng Anh thôi nha bạn.',
        replies: []
      },
      {
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/asiyajavayant.png',
        name: 'Tom',
        time: '5 ngày trước',
        comment: 'Mình đang tìm vietsub, ai có link share với!',
        replies: [
          {
            avatar: 'https://primefaces.org/cdn/primevue/images/avatar/ionibowcher.png',
            name: 'Alice',
            time: '4 ngày trước',
            comment: 'Bạn thử lên subscene xem.',
            replies: []
          }
        ]
      }
    ]
  },
  {
    avatar: 'https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png',
    name: 'Emily',
    time: '3 ngày trước',
    comment: 'Ai biết phim này có bao nhiêu tập không?',
    replies: [
      {
        avatar: 'https://primefaces.org/cdn/primevue/images/avatar/onyamalimba.png',
        name: 'David',
        time: '2 ngày trước',
        comment: 'Hình như có 16 tập bạn ơi!',
        replies: []
      }
    ]
  }
];

const suggestMovie = MovieService.getMovieData();

</script>

<template>
  <Box
    :style="{
      padding: '150px 70px 60px'
    }"
  >
  <h2 :style="{ fontSize: '1.25rem', fontWeight: '500' }">
    Bạn đang xem phim: Avengers: Endgame
  </h2>
  <Box :style="{ width: '100%', height: '900px', position: 'relative', margin: '1rem 0' }">
    <vue-plyr :style="{ width: '100%', height: '100%', position: 'absolute' }">
      <video ref="videoPlayer" data-poster="https://example.com/poster.jpg" controls width="100%">
        <p>Your browser does not support HTML5 video.</p>
      </video>
    </vue-plyr>
  </Box>
  <Flex :style="{ width: '100%' }" justify="center">
    <Flex
      direction="column"
      gap="24px"
      :style="{ 
        width: '1200px', 
        maxWidth: '1200px',
        padding: '10px',
        borderRight: '1px solid #272932' 
      }"
    >
      <Flex
        gap="12px"
        :style="{ width: '100%', paddingBottom: '8px' }"
      >
        <!-- Img box -->
        <Box 
          :style="{ 
            width: '100px', 
            minWidth: '100px',
            position: 'relative', 
            borderRadius: '0.25rem', 
            overflow: 'hidden' 
          }">
          <NuxtImg
            src="https://image.tmdb.org/t/p/original/bEcFBnDwUXXDizdaR5EiC0qRhS3.jpg" 
            preload 
            format="webp"
            :width="360"
            :height="425" 
            draggable="false" 
            loading="lazy"
            :style="{ position: 'absolute', transition: 'transform 0.3s', transform: 'scale(1)', height: '100%', width: '100%', objectFit: 'cover' }"
            @mouseover="$event.target.style.transform = 'scale(1.05)'"
            @mouseleave="$event.target.style.transform = 'scale(1)'"
          />
        </Box>
        <!-- Info movie box -->
        <Flex
          direction="column"
          :style="{ 
            width: '600px', 
            minWidth: '600px',
            position: 'relative',
            overflow: 'hidden'
          }">
            <h2 :style="{ fontSize: '1.25rem', fontWeight: 'bold' }">
              Avengers: Endgame
            </h2>
            <p :style="{ color: '#6b7280', fontSize: '0.875rem' }">
              Marvel Studios
            </p>
            <Flex direction="column" gap="0.5rem" :style="{ fontWeight: 'bold', fontSize: '12px' }">
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
            </Flex>
        </Flex>
        <!-- Description box -->
        <Flex
          direction="column"
          justify="space-between"
          :style="{
            width: '532px',
            maxWidth: '532px'
          }"
        >
          <p :style="{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '4', overflow: 'hidden', fontWeight: 'normal' }">
            Các siêu anh hùng còn lại phải tập hợp lại một lần nữa để hoàn thành nhiệm vụ cuối cùng - đưa những người đã mất trở lại.
          </p>
          <Flex gap="12px">
            <Button label="Xem cùng nhau" icon="pi pi-users" />
            <Button label="Yêu thích" icon="pi pi-heart-fill" :style="{ backgroundColor: '#dc2626', border: 'none' }" />
          </Flex>
        </Flex>
      </Flex>
      <Divider/>
      <Box :style="{ width: '100%' }">
        <Flex align="center" :style="{ marginBottom: '1.5rem!important' }" gap="16px">
          <Flex align="center" justify="center" gap="8px">
            <i class="pi pi-bars" style="padding-top: 4px"/>
            <h2 :style="{ fontSize: '1.25rem', fontWeight: 'bold' }">Danh sách tập</h2>
          </Flex>
          <Divider layout="vertical"/>
          <Flex gap="20px">
            <Flex
              v-for="(item, index) in serverItems"
              :key="index"
              align="center"
              gap="10px"
              @click="setActive(index)"
              :style="{
                border: activeItem === index ? '1px solid yellow' : 'none',
                padding: '8px',
                fontSize: '12px',
                borderRadius: '6px',
                color: activeItem === index ? 'yellow' : '#fff',
                opacity: activeItem === index ? '1' : '.8',
                cursor: 'pointer'
              }"
            >
              <i class="pi pi-server" :style="{ color: activeItem === index ? 'yellow' : '#fff' }" />
              {{ item.content }}
            </Flex>
          </Flex>
        </Flex>
        <ScrollPanel :style="{ width: '100%', overflow: 'auto', minHeight: '65px', maxHeight: '235px' }">
          <EpisodeList />
        </ScrollPanel>
      </Box>
      <Box>
        <Flex direction="column" :style="{ marginBottom: '1.5rem!important' }" gap="24px">
          <Flex align="center" gap="8px">
            <i class="pi pi-comments" />
            <h2 :style="{ fontSize: '1.25rem', fontWeight: 'bold' }">Bình luận (12)</h2>
          </Flex>
          <IftaLabel style="padding: 12px; background-color: #272932; border-radius: 8px">
            <Textarea id="description" v-model="comment" rows="5" cols="148" style="resize: none; background-color: #191b24;border: none; color: #ffffff; overflow:hidden" />
            <label style="padding: 12px; font-weight: bold;" for="description">Viết bình luận</label>
            <Flex align="center" justify="flex-end">
              <Button type="submit" icon="pi pi-send" label="Gửi" variant="text"/>
            </Flex>
          </IftaLabel>
          <Flex direction="column" gap="24px">
            <CommentBox 
              v-for="comment in comments" 
              :key="comment.time" 
              :avatar="comment.avatar" 
              :name="comment.name" 
              :time="comment.time" 
              :comment="comment.comment" 
              :replies="comment.replies" 
            />
          </Flex>
        </Flex>
      </Box>
    </Flex>
    <Box :style="{ width: '440px', maxWidth: '440px', padding: '1rem 2.5rem' }">
      <Box :style="{ width: '100%' }">
        <h2 :style="{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1.5rem' }">Diễn viên</h2>
        <Box>
          <p>Robert Downey Jr., Chris Evans, Scarlett Johansson, Mark Ruffalo</p>
        </Box>
      </Box>
      <NuxtLink v-for="(item, index) in suggestMovie" :key="index" :to="`/phim/${item.slug}`" style="text-decoration: none; color: inherit;">
        <Flex gap="20px" :style="{ backgroundColor: '#272932', padding: '10px', borderRadius: '8px', marginBottom: '10px' }">
          <NuxtImg
            :src="item.poster"
            alt="icon"
            :style="{
              width: '80px',
              height: '100%',
              objectFit: 'cover',
            }"
          />
          <Flex
            direction="column"
            gap="10px"
            justify="center"
            align="flex-start"
          >
            <h4 :style="{ fontSize: '12px', margin: '0px' }">
              {{ item.title }}
            </h4>
            <h4 :style="{ fontSize: '12px', margin: '0px' }">
              {{ item.original_title }}
            </h4>
            <Flex :style="{ fontSize: '12px', color: '#aaa' }">
              {{ item.releaseYear }} 
              <Divider layout="vertical" />
              {{ item.model }}
              <Divider layout="vertical" />
              {{ item.totalEpisodes }} Tập
            </Flex>
            <span :style="{ display: '-webkit-box', WebkitBoxOrient: 'vertical', WebkitLineClamp: '2', overflow: 'hidden', fontWeight: 'normal', fontSize: '12px', color: '#aaa' }">
              {{ item.description }}
            </span>
          </Flex>
        </Flex>
      </NuxtLink>
    </Box>
  </Flex>
  </Box>
</template>

<style scoped>
</style>
