import { Li, DivTitles, TitleContainer, H2, Span, DivP, P } from './styles';

const SkeletonCard = () => {
  return (
    <>
      <Li>
        <DivTitles>
          <TitleContainer>
            <H2 />
            <div>
              <div />
              <div />
            </div>
          </TitleContainer>
          <Span />
        </DivTitles>
        <DivP>
          <P>Lancamento</P>
          <P>Lancamento</P>
        </DivP>
      </Li>
    </>
  );
};

export default SkeletonCard;
