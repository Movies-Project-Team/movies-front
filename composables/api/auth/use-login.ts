import { useMutation } from "@tanstack/vue-query";
import { apiClient } from "~/utils/apiClient";
import { setCookie } from "~/utils/cookie";
import { useLoadingStore } from "~/stores/loading";

const ENDPOINT = '/auth/login';

interface LoginPayload {
  username: string;
  password: string;
}

interface LoginResponse {
  id: number,
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  gender: string,
  image: string,
  accessToken: string;
  refreshToken: string;
}

const loginMutationFn = async (payload: LoginPayload) => {
  const api = apiClient();
  const response = await api<LoginResponse>(`${ENDPOINT}`, {
    method: 'POST',
    body: payload,
  });
  return response;
};

export const useLogin = () => {
  const loading = useLoadingStore();

  const mutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: loginMutationFn,
    onMutate: () => {
      loading.show();
    },
    onSuccess: (data: LoginResponse) => {
      const { accessToken, image } = data;
      
      if (accessToken) {
        setCookie('access_token', accessToken);
        window.localStorage.setItem('avatar', image);

        loading.hide();
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      loading.hide();
      if (error?.response.status === 400) {
      }
    },
  });

  return {
    ...mutation,
  };
};
