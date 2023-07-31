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
    right: 0.2rem;
    cursor: pointer;
    transition: 0.5s;
    color: #4f46bb;

    &:hover {
      color: #8e85ff;
    }

    @media screen and (min-width: 360px) {
      right: 2rem;
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

export const DivButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 19.325rem;
  margin: 0 auto;
`;
