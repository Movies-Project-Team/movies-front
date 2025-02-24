<script setup lang="ts">
import { IconField, InputIcon, Menu, OverlayBadge, Toolbar } from "primevue";
import Flex from "../atoms/Flex.vue";
import MenuSideBar from "./MenuSideBar.vue";
import AuthModal from "./modal/AuthModal.vue";
import MultiProfileModal from "@/components/molecules/modal/MultiProfileModal.vue";
import { getCookie } from "~/utils/cookie";
import { logout } from "~/utils";
import Fuse from "fuse.js";

interface SearchItem {
  name: string;
  original_name: string;
  type: string;
  image: string;
}

const router = useRouter();
const isOpenModal = ref(false);
const isLoginSuccess = ref(false);
const cookieAuth = getCookie("access_token");
const profileStore = useProfileStore();

const handleLoginSuccess = (isSuccess: boolean) => {
  isLoginSuccess.value = isSuccess;
};

const menu = ref();
const items = ref([
  {
    label: "Chào Nguyễn Trọng Hiếu",
  },
  {
    separator: true,
  },
  {
    label: "Yêu thích",
    icon: "pi pi-heart-fill",
  },
  {
    label: "Danh sách",
    icon: "pi pi-plus",
  },
  {
    label: "Xem tiếp",
    icon: "pi pi-refresh",
  },
  {
    label: "Tài khoản",
    icon: "pi pi-user",
  },
  {
    separator: true,
  },
  {
    label: "Đăng xuất",
    icon: "pi pi-sign-out",
    command: logout,
  },
]);

const toggle = (event: any) => {
  menu.value.toggle(event);
};

const searchQuery = ref("");
const suggestions = ref<SearchItem[]>([]);

const itemsSearch = ref<SearchItem[]>([
  {
    name: "Thăng Cấp Một Mình",
    original_name: "Solo Leveling",
    type: "Phim",
    image:
      "https://image.tmdb.org/t/p/original/geCRueV3ElhRTr0xtJuEWJt6dJ1.jpg",
  },
  {
    name: "Nhím Sonic 3",
    original_name: "Sonic the Hedgehog 3",
    type: "Phim",
    image:
      "https://image.tmdb.org/t/p/original/d8Ryb8AunYAuycVKDp5HpdWPKgC.jpg",
  },
  {
    name: "Tình báo tái xuất",
    original_name: "Back in Action",
    type: "Phim",
    image:
      "https://image.tmdb.org/t/p/original/3L3l6LsiLGHkTG4RFB2aBA6BttB.jpg",
  },
  {
    name: "Cắt Rời Ký Ức",
    original_name: "Severance",
    type: "Phim",
    image:
      "https://image.tmdb.org/t/p/original/pPHpeI2X1qEd1CS1SeyrdhZ4qnT.jpg",
  },
  {
    name: "Tẩy Trắng",
    original_name: "Drifting Away",
    type: "Phim",
    image:
      "https://image.tmdb.org/t/p/original/bEcFBnDwUXXDizdaR5EiC0qRhS3.jpg",
  },
  {
    name: "Kraven: Thợ Săn Thủ Lĩnh",
    original_name: "Kraven the Hunter.",
    type: "Diễn viên",
    image:
      "https://image.tmdb.org/t/p/original/1GvBhRxY6MELDfxFrete6BNhBB5.jpg",
  },
  {
    name: "Silo",
    original_name: "Silo",
    type: "Diễn viên",
    image: "https://image.tmdb.org/t/p/original/tlliQuCupf8fpTH7RAor3aKMGy.jpg",
  },
]);

const fuse = computed(
  () =>
    new Fuse(itemsSearch.value, {
      keys: ["name", "original_name"],
      threshold: 0.4,
      findAllMatches: true,
      ignoreLocation: true,
      includeScore: true,
    })
);

const search = (event: any) => {
  const query = event.query.toLowerCase().trim();
  const result = fuse.value.search(query);

  suggestions.value = result.length > 0 ? result.map((res :any) => res.item) : [];
};

const goToDetail = () => {
  router.push(`/phim/asdasd`);
  searchQuery.value = '';
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
      fontWeight: '600',
    }"
  >
    <template #start>
      <Flex>
        <img
          src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo.svg"
          alt=""
        />
        <MenuSideBar />
      </Flex>
    </template>
    <template #end>
      <Flex gap="24px" align="center">
        <IconField
          :style="{
            position: 'relative',
          }"
        >
          <InputIcon>
            <i class="pi pi-search"></i>
          </InputIcon>
          <AutoComplete
            v-model="searchQuery"
            :suggestions="suggestions"
            @complete="search"
            @item-select="goToDetail"
            placeholder="Tìm kiếm phim, diễn viên"
          >
            <template #option="slotProps">
              <Flex gap="10px" @click="goToDetail()">
                <img
                  :src="slotProps.option.image"
                  alt="icon"
                  :style="{
                    width: '50px',
                    height: '100%',
                    objectFit: 'cover',
                  }"
                />
                <Flex
                  direction="column"
                  gap="14px"
                  justify="center"
                  align="flex-start"
                >
                  <h4 :style="{ fontSize: '12px', margin: '0px' }">
                    {{ slotProps.option.name }}
                  </h4>
                  <h4 :style="{ fontSize: '12px', margin: '0px' }">
                    {{ slotProps.option.original_name }}
                  </h4>
                  <Flex :style="{ fontSize: '12px', color: '#aaa' }"
                    >T16 <Divider layout="vertical" /> Phần 1
                    <Divider layout="vertical" /> 12 Tập</Flex
                  >
                </Flex>
              </Flex>
            </template>
            <template #header>
              <div
                :style="{
                  fontWeight: '700',
                  padding: '15px 15px 4px',
                }"
              >
                Danh sách phim
              </div>
            </template>
          </AutoComplete>
        </IconField>
        <OverlayBadge value="4" severity="danger">
          <Avatar icon="pi pi-bell" size="normal" />
        </OverlayBadge>
        <Flex v-if="profileStore.isVerify && cookieAuth">
          <Avatar
            shape="circle"
            image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            @click="toggle"
            aria-haspopup="true"
            aria-controls="overlay_tmenu"
          />
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

<style scoped></style>
