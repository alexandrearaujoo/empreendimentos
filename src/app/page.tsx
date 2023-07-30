import EnterpriseList from '@/components/EnterpriseList';

import { getEnterprises } from '@/services/getEnterprises';
import { Main } from '@/styles/pages/Home';

export default async function Home() {
  const enterprises = await getEnterprises('1');

  return (
    <Main>
      <EnterpriseList enterprises={enterprises} />
    </Main>
  );
}
