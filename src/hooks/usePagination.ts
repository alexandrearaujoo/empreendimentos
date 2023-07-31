import { useRouter, useSearchParams } from 'next/navigation';

import qs from 'query-string';

export const usePagination = ({
  page,
  totalPages
}: {
  page: string;
  totalPages: string;
}) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClick = () => {
    const current = qs.parse(searchParams.toString());

    const query = { ...current, page: page >= totalPages ? '1' : +page + 1 };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query
      },
      { skipNull: true }
    );
    router.push(url);
  };

  return {
    onClick
  };
};
