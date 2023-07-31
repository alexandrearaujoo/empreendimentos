'use client';

import Button from '../Button';
import Card from '../Card';
import Input from '../Input';
import { BackToTop, LoadMore, Ul } from './styles';

import { useFilterByName } from '@/hooks/useFilterByName';
import { usePagination } from '@/hooks/usePagination';
import { Enterprise } from '@/interfaces';
import { scrollToTop } from '@/lib/scrollToTop';
import { ChevronUp } from 'lucide-react';

const EnterpriseList = ({
  enterprises,
  page,
  totalPages
}: {
  enterprises: Enterprise[];
  page: string;
  totalPages: string;
}) => {
  const { onClick } = usePagination({ page, totalPages });

  const { filteredEnterprises, setName } = useFilterByName(enterprises);

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
      {filteredEnterprises.length >= 10 && (
        <LoadMore>
          <Button onClick={onClick}>Carregar mais</Button>
        </LoadMore>
      )}
      <BackToTop>
        <Button onClick={scrollToTop}>
          <ChevronUp />
        </Button>
      </BackToTop>
    </>
  );
};

export default EnterpriseList;
