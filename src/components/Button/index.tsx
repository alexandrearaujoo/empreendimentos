'use client';

import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

import { Plus } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  maxW?: number;
}

const Button = ({ children, icon, maxW, ...rest }: ButtonProps) => {
  return (
    <ButtonStyled {...rest} maxW={maxW}>
      {children} {icon && <Plus size={20} fill="white" />}
    </ButtonStyled>
  );
};

export default Button;
