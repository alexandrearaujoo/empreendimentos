'use client';

import { keyframes, styled } from 'styled-components';

const pulse = keyframes`
0% {
      background-position: 0% 0%;
    }
    100% {
      background-position: -135% 0%;
    }
`;

export const Li = styled.li`
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  box-shadow: 0px 2px 4px 0px rgba(48, 46, 69, 0.06);

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

export const H2 = styled.h2`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 15rem;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

export const DivTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  width: 100%;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > div {
      background-color: grey;
      padding: 0.5rem;
      border-radius: 0.2rem;
      background: linear-gradient(
        -90deg,
        #f0f0f0 0%,
        #f8f8f8 50%,
        #f0f0f0 100%
      );
      background-size: 400% 400%;
      animation: ${pulse} 1.2s ease-in-out infinite;
    }
  }
`;

export const Span = styled.span`
  padding: 0.5rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 20rem;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

export const DivP = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const P = styled.p`
  display: flex;
  height: 0;
  padding: 0.8rem;
  padding-inline: 1rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4.4375rem;
  background: linear-gradient(-90deg, #f0f0f0 0%, #f8f8f8 50%, #f0f0f0 100%);
  background-size: 400% 400%;
  animation: ${pulse} 1.2s ease-in-out infinite;
  color: transparent;
`;
