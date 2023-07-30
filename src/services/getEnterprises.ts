import { Enterprise } from '@/interfaces';
import { api } from '@/lib/api';

export const getEnterprises = async () => {
  const { data } = await api.get<Enterprise[]>('/enterprises');

  return data;
};
