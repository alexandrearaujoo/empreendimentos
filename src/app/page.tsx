import EnterpriseList from '@/components/EnterpriseList';

import { getEnterprises } from '@/services/getEnterprises';
import { Main } from '@/styles/pages/Home';

export default async function Home({
  searchParams
}: {
  searchParams: { page: string };
}) {
  const { page = '1' } = searchParams;

  const { data, totalPages } = await getEnterprises(page);

  return (
    <Main>
      <EnterpriseList enterprises={data} page={page} totalPages={totalPages} />
    </Main>
  );
}
