import { InputHTMLAttributes } from 'react';
import { Container, InputStyled } from './styles';
import { Search } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
}

const Input = ({ icon, ...rest }: InputProps) => {
  return (
    <Container>
      {icon && <Search size={15} color="black" />}
      <InputStyled {...rest} />
    </Container>
  );
};

export default Input;
