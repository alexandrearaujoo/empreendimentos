import EnterpriseList from '@/components/EnterpriseList';

import { getEnterprises } from '@/services/getEnterprises';
import { Main } from '@/styles/pages/Home';

export default async function Home() {
  const { data } = await getEnterprises('1');

  console.log(data);

  return (
    <Main>
      <EnterpriseList />
    </Main>
  );
}
