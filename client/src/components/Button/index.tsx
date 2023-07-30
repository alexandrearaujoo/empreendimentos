'use client';

import { ButtonHTMLAttributes } from 'react';

import { ButtonStyled } from './styles';

import { Plus } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: boolean;
  maxW?: number;
  headerButton?: boolean;
}

const Button = ({
  children,
  icon = false,
  maxW,
  headerButton = false,
  ...rest
}: ButtonProps) => {
  return (
    <ButtonStyled {...rest} maxW={maxW} headerButton={headerButton}>
      {children} {icon && <Plus />}
    </ButtonStyled>
  );
};

export default Button;
