'use client';

import { css, styled } from 'styled-components';

export const ButtonStyled = styled.button<{
  maxW?: number;
  headerButton?: boolean;
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 4.4375rem;
  background-color: #4f46bb;
  color: #fff;
  font-weight: 700;
  border: none;
  transition: 0.5s;
  width: 100%;

  > svg {
    width: 1.2rem;
    height: 1.2rem;
    color: #fff;
  }

  ${({ maxW }) =>
    maxW &&
    css`
      max-width: 2rem;
      height: 2rem;

      @media screen and (min-width: 628px) {
        max-width: ${maxW}rem;
      }
    `}

  ${({ headerButton }) =>
    headerButton &&
    css`
      @media screen and (min-width: 628px) {
        &::before {
          content: 'Adicionar';
        }
      }
    `}

  &:hover {
    background-color: #8e85ff;
  }
`;
