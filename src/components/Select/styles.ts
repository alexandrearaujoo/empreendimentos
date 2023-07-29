'use client';

import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border: none;
  gap: 1rem;
  background-color: transparent;
  border-bottom: 2px solid #bbb8d9;

  > svg {
    position: absolute;
    right: 0;
    top: 1;
    z-index: -1;
  }
`;

export const SelectStyled = styled.select`
  font-size: 1rem;
  position: relative;
  display: inline-block;
  width: 100%;
  cursor: pointer;
  padding-block: 1rem;
  outline: 0;
  border: 0px solid #000000;
  border-radius: 0px;
  background: transparent;
  color: #000000;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  ::-ms-expand {
    display: none;
  }
`;
