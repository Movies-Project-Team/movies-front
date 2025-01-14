<script setup lang="ts">
import { Form } from "@primevue/forms";
import { InputText, Message } from "primevue";
import { ref, watch } from "vue";
import Box from "~/components/atoms/Box.vue";
import Flex from "~/components/atoms/Flex.vue";

const props = defineProps<{
  visible: boolean;
}>();

const localVisible = ref(props.visible);

watch(
  () => props.visible,
  (newVal) => {
    localVisible.value = newVal;
  }
);

const emit = defineEmits(["update:visible"]);
</script>

<template>
  <Dialog
    v-model:visible="localVisible"
    modal
    header="Welcome Back!"
    :style="{ 
      maxWidth: '556px',
      minHeight: '580px',
      padding: '38px 70px 45px 70px',
      width: 'calc(100% - 40px)',
    }"
  >
    <template #container="{ closeCallback }">
      <Flex direction="column" gap="20px">
        <Flex direction="column" gap="10px" align="center">
          <img src="https://streamvid.jwsuperthemes.com/wp-content/uploads/2023/02/logo_sin.svg" alt="" :style="{ width: '40px', height: '40px' }">
          <h5
            :style="{
              color: '#00031C',
              fontSize: '21px',
              fontWeight: '700',
              margin: '0px'
            }"
          >Welcome Back!</h5>
        </Flex>
        <Flex direction="column" gap="8px">
          <Button 
            label="Đăng nhập với Facebook" 
            icon="pi pi-facebook"
            :style="{
              background: '#1877F2',
              border: 'none',
              height: '40px'
            }"
          />
          <Button 
            label="Đăng nhập với Google" 
            icon="pi pi-google"
            :style="{
              background: '#fff',
              color: '#00031c',
              border: '1px solid rgba(0, 3, 28, .1)',
              height: '40px'
            }"
          />
          <Box class="social-line">
            <span>or</span>
          </Box>
        </Flex>
        <Form v-slot="$form" :style="{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }">
            <div>
                <InputText name="username" type="text" placeholder="Nhập Email" :style="{ width: '100%', padding: '12px' }"/>
                <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">{{ $form.username.error?.message }}</Message>
            </div>
            <div>
                <InputText name="email" type="text" placeholder="Nhập Password" :style="{ width: '100%', padding: '12px' }"/>
                <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">{{ $form.email.error?.message }}</Message>
            </div>
            <Flex justify="space-between" :style="{ margin: '8px 0px' }">
              <Flex gap="4px" align="center">
                <Checkbox binary inputId="ingredient1" name="pizza" value="remember"/>
                <label for="ingredient1"> Ghi nhớ </label>
              </Flex>
              <NuxtLink to="/forgot-password">Quên mật khẩu?</NuxtLink>
            </Flex>
            <Button label="Đăng nhập" :style="{ padding: '15px 31px' }" @click="closeCallback"/>
            <Box :style="{ marginTop: '10px', fontSize: '14px', textAlign: 'center', color: '#ddd' }">
              <span>Bằng cách đăng ký, bạn đồng ý với Điều khoản sử dụng và Chính sách bảo mật của chúng tôi</span>
            </Box>
        </Form>
      </Flex>
    </template>
  </Dialog>
</template>

<style scoped>
.social-line {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2px;
  margin-bottom: 9px;
  font-size: 14px;
}

.social-line span {
  margin: 0 30px;
}

.social-line::after,
.social-line::before {
  content: "";
  flex: 1 0 0%;
  border-bottom: 1px solid rgba(113, 116, 136, .1);
}
</style>
