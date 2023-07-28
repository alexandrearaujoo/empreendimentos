import { ButtonHTMLAttributes } from 'react';
import { ButtonStyled } from './styles';
import { Plus } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
}

const Button = ({ children, icon, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest}>
      {children} {icon && <Plus size={20} fill="white" />}
    </ButtonStyled>
  );
};

export default Button;
