// ~/utils/apiClient.ts
import { getCookie } from '~/utils/cookie';
import { logout } from '@/utils';

export const apiClient = () => {
  const config = useRuntimeConfig();

  const api = $fetch.create({
    baseURL: config.public.apiBaseUrl.base,
    headers: {
      Authorization: `Bearer ${getCookie('access_token')}`,
    },
    onRequest({ request, options }) {
      const token = getCookie('access_token');
      if (token) {
        options.headers = {
          ...options.headers,
        };
      }
    },
    
    onResponse({ response }) {
      if (response.status === 400) {
        logout();
      }
    },
  });

  return api;
};
