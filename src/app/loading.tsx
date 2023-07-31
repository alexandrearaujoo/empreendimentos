import Input from '@/components/Input';
import SkeletonCard from '@/components/SkeletonCard';

import { Main } from '@/styles/pages/Home';
import { Ul } from '@/styles/pages/Loading';

export default function Loading() {
  return (
    <Main>
      <Input icon placeholder="Buscar" />
      <Ul>
        {...Array.from({ length: 10 }).map((_, i) => <SkeletonCard key={i} />)}
      </Ul>
    </Main>
  );
}
