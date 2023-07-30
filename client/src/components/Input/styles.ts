'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  border: none;
  gap: 1rem;
  background-color: transparent;
  border-bottom: 2px solid #bbb8d9;
`;

export const InputStyled = styled.input`
  width: 100%;
  padding-block: 1rem;
  border: none;
  background-color: transparent;
  font-size: 1rem;
  outline: none;
  color: #302e45;

  &::placeholder {
    color: #302e45;
  }
`;
