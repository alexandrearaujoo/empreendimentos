'use client';
import { useState } from 'react';

import Card from '../Card';
import Input from '../Input';
import { Ul } from './styles';

import { useFilterByName } from '@/hooks/useFilterByName';
import { Enterprise } from '@/interfaces';

const EnterpriseList = ({ enterprises }: { enterprises: Enterprise[] }) => {
  const [name, setName] = useState('');
  const { filteredEnterprises } = useFilterByName(enterprises, name);

  return (
    <>
      <Input
        icon
        placeholder="Buscar"
        onChange={(e) => setName(e.target.value)}
      />
      <Ul>
        {filteredEnterprises.length > 0 ? (
          <>
            {filteredEnterprises.map((enterprise) => (
              <Card key={enterprise.id} enterprise={enterprise} />
            ))}
          </>
        ) : (
          <>
            {enterprises.map((enterprise) => (
              <Card key={enterprise.id} enterprise={enterprise} />
            ))}
          </>
        )}
      </Ul>
    </>
  );
};

export default EnterpriseList;
