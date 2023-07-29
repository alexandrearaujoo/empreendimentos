'use client';

import { css, styled } from 'styled-components';

export const ButtonStyled = styled.button<{ maxW?: number }>`
  display: inline-flex;
  padding: 0.625rem 2.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  border-radius: 4.4375rem;
  background-color: #4f46bb;
  color: #fff;
  font-weight: 700;
  border: none;
  transition: 0.5s;
  width: 100%;

  ${({ maxW }) =>
    maxW &&
    css`
      max-width: ${maxW}rem;
    `}

  &:hover {
    background-color: #8e85ff;
  }
`;
