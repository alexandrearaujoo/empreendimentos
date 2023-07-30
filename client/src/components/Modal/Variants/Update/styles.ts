'use client';

import { styled } from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  > button {
    margin: 0 auto;
  }

  > svg {
    position: absolute;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    transition: 0.5s;
    color: #4f46bb;

    &:hover {
      color: #8e85ff;
    }
  }
`;

export const DivAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-size: 0.8rem;

  > p {
    color: #302e45;
    font-weight: 500;
  }
`;
