'use client';

import { styled } from 'styled-components';

export const Main = styled.main`
  width: 100%;
  margin-top: 6.88rem;
  padding-inline: 1rem;

  @media screen and (min-width: 768px) {
    padding-inline: 6rem;
  }
`;

export const Ul = styled.ul`
  margin-top: 3rem;
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
