import { useEffect, useRef, useState } from 'react';

import { Enterprise } from '@/interfaces';
import { getEnterprises } from '@/services/getEnterprises';

export const usePagination = ({
  enterprises
}: {
  enterprises: Enterprise[];
}) => {
  const isFetching = useRef<boolean>(false);
  const isLastPage = useRef<boolean>(false);
  const [dataEnterprises, setDataEnterprises] = useState<Enterprise[]>([]);

  useEffect(() => {
    setDataEnterprises(enterprises);

    return () => setDataEnterprises(enterprises);
  }, [enterprises]);

  const onClick = async (page: string) => {
    const pageCount = page === '1' ? '2' : Number(page) + 1;

    try {
      isFetching.current = true;
      const { data, lastPage } = await getEnterprises(pageCount.toString());

      isLastPage.current = lastPage;

      setDataEnterprises((prev) => [...prev, ...data]);
    } finally {
      isFetching.current = false;
    }
  };

  return {
    onClick,
    dataEnterprises,
    isFetching: isFetching.current,
    isLastPage: isLastPage.current
  };
};
