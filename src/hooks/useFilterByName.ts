import { useState } from 'react';

import { Enterprise } from '@/interfaces';

export const useFilterByName = (enterprises: Enterprise[]) => {
  const [name, setName] = useState('');

  const filteredEnterprises = enterprises.filter((enterprise) =>
    enterprise.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
  );

  return { filteredEnterprises, setName };
};
