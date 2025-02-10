<script setup lang="ts">
import { IconField, InputIcon, InputText, Menu, OverlayBadge, Toolbar } from 'primevue';
import Flex from '../atoms/Flex.vue';
import MenuSideBar from './MenuSideBar.vue';
import AuthModal from './modal/AuthModal.vue';
import MultiProfileModal from '@/components/molecules/modal/MultiProfileModal.vue';
import { getCookie } from "~/utils/cookie";

const isOpenModal = ref(false);
const isLoginSuccess = ref(false);
const cookieAuth = getCookie('access_token');
const profileStore = useProfileStore();

const handleLoginSuccess = (isSuccess: boolean) => {
  isLoginSuccess.value = isSuccess;
};

const menu = ref();
const items = ref([
    {
        label: 'Chào Nguyễn Trọng Hiếu',
    },
    {
        separator: true
    },
    {
        label: 'Yêu thích',
        icon: 'pi pi-heart-fill'
    },
    {
        label: 'Danh sách',
        icon: 'pi pi-plus',
    },
    {
        label: 'Xem tiếp',
        icon: 'pi pi-refresh'
    },
    {
        label: 'Tài khoản',
        icon: 'pi pi-user'
    },
    {
        separator: true
    },
    {
        label: 'Thoát',
        icon: 'pi pi-sign-out',
    }
]);

const toggle = (event: any) => {
    menu.value.toggle(event);
};

</script>

<template>
  <Toolbar 
    :style="{
      border: '0px',
      width: '100%',
      borderRadius: '0px',
      height: '90px',
      padding: '0px 70px',
      background: 'none',
      fontWeight: '600'
    }"
  >
    <template #start>
      <Flex>
        <img src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo.svg" alt="">
        <MenuSideBar />
      </Flex>
    </template>
    <template #end>
      <Flex
        gap="24px"
        align="center"
      >
      <IconField
          :style="{
            position: 'relative'
          }"
        >
          <InputIcon>
            <i class="pi pi-search"></i>
          </InputIcon>
          <InputText 
            type="text" 
            placeholder="Tìm kiếm phim, diễn viên"
            :style="{
              width: '368px',
              height: '2.8rem',
              borderRadius: '.4rem',
              outline: 'none!important',
              boxShadow: 'none!important',
              padding: '.4rem 3rem',
              lineHeight: '2rem',
              color: '#fff',
              background: '#22242c'
            }"
          />
        </IconField>
        <OverlayBadge value="4" severity="danger">
          <Avatar icon="pi pi-bell" size="normal" />
        </OverlayBadge>
        <Flex v-if="profileStore.isVerify && cookieAuth" >
          <Avatar shape="circle" image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu"/>
          <Menu 
            ref="menu" 
            id="overlay_tmenu" 
            :model="items" 
            popup
            :style="{
                background: 'rgba(15, 17, 26, .95)',
                border: 'none',
                color: '#fff',
            }"  
          />
        </Flex>
        <Button
          label="Đăng nhập"
          icon="pi pi-user"
          :style="{ padding: '10px' }"
          raised
          @click="isOpenModal = true"
          v-else
        />
      </Flex>
      <AuthModal 
        :visible="isOpenModal" 
        @authSuccess="handleLoginSuccess" 
        @update:visible="isOpenModal = $event"
      />
      <MultiProfileModal 
        v-if="isLoginSuccess" 
        :visible="isLoginSuccess" 
        @update:visible="isLoginSuccess = $event"
      />
    </template>
  </Toolbar>
</template>

<style scoped>
</style>
