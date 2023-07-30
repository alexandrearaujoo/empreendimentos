'use client';

import Button from '../Button';
import Card from '../Card';
import Input from '../Input';
import { BackToTop, LoadMore, Ul } from './styles';

import { useFilterByName } from '@/hooks/useFilterByName';
import { usePagination } from '@/hooks/usePagination';
import { scrollToTop } from '@/lib/scrollToTop';
import { ChevronUp } from 'lucide-react';

const EnterpriseList = () => {
  const { currentPage, setCurrentPage, newEnterprises, isEnd } =
    usePagination();

  const { filteredEnterprises, setName } = useFilterByName(newEnterprises);

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
            {newEnterprises.map((enterprise) => (
              <Card key={enterprise.id} enterprise={enterprise} />
            ))}
          </>
        )}
      </Ul>
      {!isEnd && filteredEnterprises.length >= 10 && (
        <LoadMore>
          <Button onClick={() => setCurrentPage(currentPage + 1)} maxW={19.325}>
            Carregar mais
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
