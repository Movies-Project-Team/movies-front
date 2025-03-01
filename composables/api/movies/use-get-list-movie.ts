import { keepPreviousData, useQuery } from "@tanstack/vue-query";
import { apiReClient } from "@/utils/apiReClient";

const ENDPOINT = '/movies';

const fetchData = async (params: Record<string, string | number | boolean>): Promise<MovieResponse> => {
  const api = apiReClient();
  const queryString = new URLSearchParams(params as Record<string, string>).toString();
  const response = await api<MovieResponse>(`${ENDPOINT}?${queryString}`, {
    method: 'GET',
  });
  return response;
};

export const useGetListMovie = (
  params: Ref<Record<string, string | number | boolean>> = ref({})
) => {
  const query = useQuery({
    queryKey: ['movie-list', params],
    queryFn: () => fetchData(params.value),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
  };
};
