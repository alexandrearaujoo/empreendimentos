import Card from '@/components/Card';
import Input from '@/components/Input';

import { getEnterprises } from '@/services/getEnterprises';
import { Main, Ul } from '@/styles/pages/Home';

export default async function Home() {
  const enterprises = await getEnterprises();

  return (
    <Main>
      <Input icon placeholder="Buscar" />
      <Ul>
        {enterprises.map((enterprise) => (
          <Card key={enterprise.id} enterprise={enterprise} />
        ))}
      </Ul>
    </Main>
  );
}
