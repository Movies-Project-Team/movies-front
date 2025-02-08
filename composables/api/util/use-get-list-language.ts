import { keepPreviousData, useQuery } from "@tanstack/vue-query";
import { apiReClient } from "~/utils/apiReClient";

const ENDPOINT = '/util/languages';

const fetchData = async (): Promise<LanguageReponse> => {
  const api = apiReClient();
  const response = await api<LanguageReponse>(`${ENDPOINT}`, {
    method: 'GET',
  });
  return response;
};

export const useGetListLanguage = () => {
  const query = useQuery({
    queryKey: ['language-list'],
    queryFn: () => fetchData(),
    placeholderData: keepPreviousData,
  });

  return {
    ...query,
  };
};
