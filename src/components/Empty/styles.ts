'use client';

import { styled } from 'styled-components';

export const Section = styled.section`
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  transform: translateX(-50%);
`;

export const H1 = styled.h1`
  font-size: 1rem;
  width: 100%;
  text-align: center;

  @media screen and (min-width: 468px) {
    font-size: 1.5rem;
  }
`;
