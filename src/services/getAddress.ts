import { Address } from '@/interfaces';
import { viaCep } from '@/lib/api';

export const getAddress = async (zipCode: string) => {
  const { data } = await viaCep.get<Address>(`/${zipCode}/json`);

  return data;
};
