import Button from "../Button";
import { H1, HeaderStyled } from "./styles";

const Header = () => {
  return <HeaderStyled>
    <H1>Empreendimentos</H1>
    <Button icon>Adicionar</Button>
  </HeaderStyled>
}

export default Header;