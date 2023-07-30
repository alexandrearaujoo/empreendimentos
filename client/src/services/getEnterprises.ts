import { Enterprise } from '@/interfaces';
import { api } from '@/lib/api';

export const getEnterprises = async (page: string) => {
  const res = await api.get<Enterprise[]>(
    `/enterprises?_page=${page}&_limit=10&_sort=id&_order=desc`
  );

  return { data: res.data, totalPages: res.headers['x-total-count'] };
};
