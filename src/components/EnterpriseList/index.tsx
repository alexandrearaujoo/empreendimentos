'use client';

import { useState } from 'react';

import Button from '../Button';
import Card from '../Card';
import Empty from '../Empty';
import Input from '../Input';
import Spinner from '../Spinner';
import { BackToTop, LoadMore, Ul } from './styles';

import { useFilterByName } from '@/hooks/useFilterByName';
import { usePagination } from '@/hooks/usePagination';
import { Enterprise } from '@/interfaces';
import { scrollToTop } from '@/lib/scrollToTop';
import { ChevronUp } from 'lucide-react';

const EnterpriseList = ({ enterprises }: { enterprises: Enterprise[] }) => {
  const [page, setPage] = useState(1);

  const { onClick, dataEnterprises, isFetching, isLastPage } = usePagination({
    enterprises
  });

  const { filteredEnterprises, setName } = useFilterByName(dataEnterprises);

  return (
    <>
      <Input
        disabled={dataEnterprises.length === 0}
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
            {dataEnterprises.map((enterprise) => (
              <Card key={enterprise.id} enterprise={enterprise} />
            ))}
          </>
        )}
        {dataEnterprises.length === 0 && <Empty />}
      </Ul>
      {!isLastPage && dataEnterprises.length >= 10 && (
        <LoadMore>
          <Button
            onClick={() => {
              onClick(page.toString());
              setPage((prev) => prev + 1);
            }}
          >
            {isFetching ? (
              <>
                <Spinner />
                Carregando...
              </>
            ) : (
              'Carregar mais'
            )}
          </Button>
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
