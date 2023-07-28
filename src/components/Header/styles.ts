'use client';

import { styled } from 'styled-components';

export const HeaderStyled = styled.header`
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 428px) {
    padding: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    padding-inline: 6rem;
  }
`;
export const H1 = styled.h1`
  font-size: 1rem;
  color: #4f46bb;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;

  @media screen and (min-width: 428px) {
    font-size: 1.5rem;
  }
`;
