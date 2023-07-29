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

export const DialogRoot = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  backdrop-filter: blur(2px);
  width: 100%;
  height: 100vh;
  z-index: 50;
  overflow-y: hidden;
  animation: ${fadeIn} 0.3s ease-in-out;
`;

export const DialogContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  width: 95%;
  max-width: 31rem;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0px 2px 4px 0px rgba(48, 46, 69, 0.06);
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

export const DialogHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const DialogTitle = styled.h1`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;
