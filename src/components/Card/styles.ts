'use client';

import { styled } from 'styled-components';

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
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  width: 15ch;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const DivTitles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > svg {
      cursor: pointer;
      transition: 0.5s;
      color: #4f46bb;

      &:hover {
        color: #8e85ff;
      }
    }
  }
`;

export const Span = styled.span`
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  color: #6d6c7b;
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
  padding-inline: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 4.4375rem;
  border: 1px solid #8e85ff;
  font-size: 0.85rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
