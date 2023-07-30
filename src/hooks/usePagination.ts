import { useEffect, useState } from 'react';

import { Enterprise } from '@/interfaces';
import { getEnterprises } from '@/services/getEnterprises';

export const usePagination = () => {
  const [newEnterprises, setNewEnterprises] = useState<Enterprise[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    getEnterprises(currentPage.toString()).then(({ data, totalPages }) => {
      if (currentPage.toString() > totalPages) {
        setIsEnd(true);
        return;
      }
      setNewEnterprises((current) => [...current, ...data]);
    });
  }, [currentPage]);

  return {
    newEnterprises,
    currentPage,
    isEnd,
    setCurrentPage
  };
};
