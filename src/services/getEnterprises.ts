import { Enterprise } from '@/interfaces';
import { api } from '@/lib/api';

export const getEnterprises = async (page: string) => {
  const res = await api.get<Enterprise[]>('/enterprises', {
    params: {
      _page: page,
      _limit: 10,
      _sort: 'id',
      _order: 'desc'
    }
  });

  const lastPage =
    res.headers.link && res.headers.link.split(',')[2] ? false : true;

  return { data: res.data, lastPage };
};
