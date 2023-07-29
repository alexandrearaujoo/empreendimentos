import Card from '@/components/Card';
import Input from '@/components/Input';

import { Main, Ul } from '@/styles/pages/Home';

export default function Home() {
  return (
    <Main>
      <Input icon placeholder="Buscar" />
      <Ul>{...Array.from({ length: 10 }, (_, i) => <Card key={i} />)}</Ul>
    </Main>
  );
}
