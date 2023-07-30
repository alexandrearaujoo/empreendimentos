import { Enterprise } from '@/interfaces';

export const useFilterByName = (enterprises: Enterprise[], name: string) => {
  const filteredEnterprises = enterprises.filter((enterprises) =>
    enterprises.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return { filteredEnterprises };
};
