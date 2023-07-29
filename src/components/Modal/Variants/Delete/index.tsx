'use client';

import { Inter } from 'next/font/google';

import Button from '@/components/Button';

import { Div, Span } from './styles';

import { modalStore } from '@/stores/modalStore';
import { X } from 'lucide-react';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

const DeleteModal = () => {
  const onCloseDeleteModal = modalStore((state) => state.onCloseDeleteModal);

  return (
    <>
      <Span className={inter.className}>Tem certeza que deseja deletar ?</Span>
      <Div>
        <X size={20} onClick={onCloseDeleteModal} />
        <Button onClick={onCloseDeleteModal}>Cancelar</Button>
        <Button>Deletar</Button>
      </Div>
    </>
  );
};

export default DeleteModal;
