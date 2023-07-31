import { InputHTMLAttributes, forwardRef } from 'react';

import { Container, InputStyled, Error } from './styles';

import { Search } from 'lucide-react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: boolean;
  errors?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon, errors, ...rest }, ref) => {
    return (
      <>
        <Container>
          {icon && <Search size={15} color="black" />}
          <InputStyled {...rest} ref={ref} />
        </Container>
        {errors && <Error>{errors}</Error>}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
