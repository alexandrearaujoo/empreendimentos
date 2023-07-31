'use client';

import { keyframes, styled } from 'styled-components';

const fadeIn = keyframes`
  from {
    opacity: 0;
    scale: 0.9;
  }
  to {
    opacity: 1;
    scale: 1;
  }
`;

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
  &:disabled {
    cursor: not-allowed;
  }
`;

export const Error = styled.span`
  color: #f12;
  border-radius: 0.5rem;
  padding: 0.2rem;
  width: 100%;
  max-width: 13rem;
  font-size: 0.8rem;
  font-weight: 700;
  transition: 0.5s;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
