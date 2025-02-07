import { useMutation } from "@tanstack/vue-query";
import { apiReClient } from "~/utils/apiReClient";
import { useLoadingStore } from "~/stores/loading";

const ENDPOINT = '/profile/verify/password';

interface VerifyPasswordPayload {
  profileId: number,
  password: string
}

interface VerifyPasswordResponse {
  message: string,
}

const loginMutationFn = async (payload: VerifyPasswordPayload) => {
  const api = apiReClient();
  const response = await api<VerifyPasswordResponse>(`${ENDPOINT}`, {
    method: 'POST',
    body: payload,
  });
  
  return response;
};

export const useVerifyPasswordProfile = () => {
  const loading = useLoadingStore();

  const mutation = useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: loginMutationFn,
    onMutate: () => {
      loading.show();
    },
    onSuccess: (data: VerifyPasswordResponse) => {
      loading.hide();
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      loading.hide();
    },
  });

  return {
    ...mutation,
  };
};
