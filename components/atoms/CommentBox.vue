<script setup lang="ts">
import { ref, computed } from 'vue';
import Box from './Box.vue';
import Flex from './Flex.vue';

const props = defineProps({
  avatar: String,
  name: String,
  time: String,
  comment: String,
  repliedTo: String,
  replies: Array as () => { 
    avatar: string, 
    name: string, 
    time: string, 
    comment: string, 
    replies?: any[] 
  }[],
  level: { type: Number, default: 1 },
});

const isReply = computed(() => !!props.repliedTo);
const showReplies = ref(false);

const totalReplies = computed(() => {
  const countReplies = (replies: any[]) => {
    return replies.reduce((total, reply) => total + 1 + (reply.replies ? countReplies(reply.replies) : 0), 0);
  };
  return props.replies ? countReplies(props.replies) : 0;
});
</script>

<template>
  <Flex gap="20px" direction="column">
    <Flex gap="12px" justify="flex-start">
      <Box>
        <Avatar :image="avatar" class="mr-2" size="large" shape="circle" />
      </Box>
      <Flex direction="column" gap="10px" :style="{ fontSize: '14px' }">
        <Flex align="center" gap="12px">
          <Box :style="{ fontWeight: 'bold' }">{{ name }}</Box>
          <span :style="{ color: '#aaa', opacity: '.5', fontSize: '12px' }">{{ time }}</span>
        </Flex>
        <Flex gap="6px" align="center">
          <span v-if="isReply" :style="{ padding: '.2rem .3rem', backgroundColor: '#3e435c', borderRadius: '.2rem' }">@{{ repliedTo }} </span>
          {{ comment }}
        </Flex>
        <Flex gap="16px" :style="{ fontSize: '12px' }">
          <i class="pi pi-arrow-circle-up" style="color: #ddd; cursor: pointer"></i>
          <i class="pi pi-arrow-circle-down" style="color: #ddd; cursor: pointer"></i>
          <Flex gap="6px" align="center" :style="{ cursor: 'pointer', color: '#aaa' }">
            <i class="pi pi-reply" style="color: #aaa; cursor: pointer; font-size: 12px"></i>
            <span>Trả lời</span>
          </Flex>
        </Flex>
        <Flex 
          v-if="level === 1 && replies && replies.length" 
          align="center"
          gap="6px"
          @click="showReplies = !showReplies"
          :style="{ cursor: 'pointer', color: '#aaa', fontSize: '12px', marginTop: '6px' }"
        >
          <i 
            :class="showReplies ? 'pi pi-chevron-up' : 'pi pi-chevron-down'" 
            style="font-size: 14px"
          ></i>
          <span>{{ showReplies ? 'Ẩn bình luận' : `${totalReplies} bình luận` }}</span>
        </Flex>
      </Flex>
    </Flex>

    <!-- Hiển thị danh sách replies khi showReplies = true -->
    <Flex 
      v-if="(level > 1) || showReplies" 
      direction="column" 
      gap="8px"
      :style="{ marginLeft: level === 1 ? '48px' : '0px' }" 
    >
      <CommentBox 
        v-for="reply in replies" 
        :key="reply.time" 
        :avatar="reply.avatar" 
        :name="reply.name" 
        :time="reply.time" 
        :repliedTo="name"
        :comment="reply.comment"
        :replies="reply.replies"
        :level="level + 1"
      />
    </Flex>
  </Flex>
</template>
