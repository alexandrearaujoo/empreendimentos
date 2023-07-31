'use client';

import { styled } from 'styled-components';

export const Div = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

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

  @media screen and (min-width: 428px) {
    flex-direction: row;
  }
`;

export const Span = styled.span`
  font-size: 1rem;
  text-align: center;
`;
