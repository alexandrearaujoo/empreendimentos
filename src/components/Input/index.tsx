import { InputHTMLAttributes, forwardRef } from 'react';

import { Container, InputStyled } from './styles';

import { Search } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  errors?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, errors, ...rest }, ref) => {
    return (
      <Container>
        {icon && <Search size={15} color="black" />}
        <InputStyled {...rest} ref={ref} />
        {errors && <span>{errors}</span>}
      </Container>
    );
  }
);

Input.displayName = 'Input';

export default Input;
