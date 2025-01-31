<script setup lang="ts">
import { Form } from "@primevue/forms";
import { zodResolver } from '@primevue/forms/resolvers/zod';
import { COMMON_MESSAGES } from '@/constants/messages';
import * as z from 'zod';
import { useLogin } from '~/composables/api/auth/use-login';
import { InputText, Message, Password } from "primevue";
import { ref, watch } from "vue";
import Box from "~/components/atoms/Box.vue";
import Flex from "~/components/atoms/Flex.vue";

const props = defineProps<{
  visible: boolean;
}>();

const localVisible = ref(props.visible);
const isSuccess = ref(false);

watch(
  () => props.visible,
  (newVal) => {
    localVisible.value = newVal;
  }
);

const emit = defineEmits(["update:visible", "loginSuccess"]);

const initialValues = ref({
  username: '',
  email: '',
  password: '',
  rememberLogin: false,
});
const isLogin = ref(true);

const schema = computed(() =>
  z.object({
    username: z.string().trim().min(1, { message: COMMON_MESSAGES.required }),
    email: isLogin.value
      ? z.string().email({ message: COMMON_MESSAGES.required })
      : z.string().optional(),
    password: z.string().trim().min(1, { message: COMMON_MESSAGES.required }),
    rememberLogin: z.boolean().default(false).optional(),
  })
);

const resolver = computed(() => zodResolver(schema.value));
const loginMutation = useLogin();
const onSubmit = (data: any, closeCallback: Function) => {
  loginMutation.mutate(data, {
    onSuccess: () => {
      closeCallback();
      isSuccess.value = true;
      emit("loginSuccess", isSuccess.value);
    },
  });

};
</script>

<template>
  <Dialog
    v-model:visible="localVisible"
    modal
    header="Chào mừng trở lại!"
    :style="{ 
      maxWidth: '556px',
      minHeight: '580px',
      padding: '38px 70px 45px 70px',
      width: 'calc(100% - 40px)',
    }"
    @hide="emit('update:visible', false)"
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
          >Chào mừng trở lại!</h5>
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
        <Form 
          v-slot="$form"
          :initialValues
          :resolver="resolver"
          @submit="onSubmit(initialValues, closeCallback)"
          :style="{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px'
          }"
        >
            <Flex direction="column" gap="8px">
              <InputText 
                v-model="initialValues.username" 
                name="username" 
                type="text" 
                placeholder="Nhập Email" 
                :style="{ width: '100%', padding: '12px' }"/>
              <Message 
                v-if="$form.username?.invalid"
                severity="error"
                size="small"
                variant="simple"
              >
                {{ $form.username.error?.message }}
              </Message>
            </Flex>
            <Flex direction="column" gap="8px">
              <Password 
                v-model="initialValues.password"
                :feedback="false"
                name="password" 
                type="text" 
                placeholder="Nhập Password" 
                toggleMask 
                fluid 
                :style="{ width: '100%', padding: '12px' }"/>
              <Message 
                v-if="$form.password?.invalid" 
                severity="error" 
                size="small" 
                variant="simple"
              >
                {{ $form.password.error?.message }}
              </Message>
            </Flex>
            <Flex justify="space-between" :style="{ margin: '8px 0px' }">
              <Flex gap="4px" align="center">
                <Checkbox binary inputId="ingredient1" name="pizza" value="remember"/>
                <label for="ingredient1"> Ghi nhớ </label>
              </Flex>
              <NuxtLink to="/forgot-password">Quên mật khẩu?</NuxtLink>
            </Flex>
            <Button type="submit" label="Đăng nhập" :style="{ padding: '15px 31px' }"/>
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
