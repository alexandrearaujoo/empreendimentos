'use client';

import { Inter } from 'next/font/google';

import Button from '@/components/Button';
import Spinner from '@/components/Spinner';

import { Div, Span } from './styles';

import { useDeleteEnterprise } from '@/hooks/useDeleteEnterprise';
import { modalStore } from '@/stores/modalStore';
import { X } from 'lucide-react';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

const DeleteModal = () => {
  const onCloseDeleteModal = modalStore((state) => state.onCloseDeleteModal);
  const enterpriseId = modalStore((state) => state.enterpriseId);
  const { loading, onClick } = useDeleteEnterprise(enterpriseId);

  return (
    <>
      <Span className={inter.className}>Tem certeza que deseja deletar ?</Span>
      <Div>
        <X size={20} onClick={onCloseDeleteModal} />
        <Button onClick={onCloseDeleteModal} disabled={loading}>
          Cancelar
        </Button>
        <Button onClick={onClick} disabled={loading}>
          {loading ? (
            <>
              <Spinner /> Deletando...
            </>
          ) : (
            'Deletar'
          )}
        </Button>
      </Div>
    </>
  );
};

export default DeleteModal;
