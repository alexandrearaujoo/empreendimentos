import { Inter } from 'next/font/google';
import { DivP, DivTitles, H2, Li, P, Span, TitleContainer } from './styles';
import { Pencil, Trash } from 'lucide-react';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

const Card = () => {
  return (
    <Li>
      <DivTitles>
        <TitleContainer>
          <H2 className={inter.className}>Villega Vila Velha</H2>
          <div>
            <Pencil size={20} />
            <Trash size={20} />
          </div>
        </TitleContainer>
        <Span className={inter.className}>Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha</Span>
      </DivTitles>
      <DivP>
        <P className={inter.className}>Lancamento</P>
        <P className={inter.className}>Residencial</P>
      </DivP>
    </Li>
  );
};

export default Card;
