'use client';

import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

import { DivP, DivTitles, H2, Li, P, Span, TitleContainer } from './styles';

import { modalStore } from '@/stores/modalStore';
import { Pencil, Trash } from 'lucide-react';

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

const Card = () => {
  const {
    isDeleteModalOpen,
    isUpdateModalOpen,
    onOpenDeleteModal,
    onOpenUpdateModal
  } = modalStore((state) => ({
    isDeleteModalOpen: state.isDeleteModalOpen,
    isUpdateModalOpen: state.isUpdateModalOpen,
    onOpenDeleteModal: state.onOpenDeleteModal,
    onOpenUpdateModal: state.onOpenUpdateModal
  }));

  return (
    <>
      <Li>
        <DivTitles>
          <TitleContainer>
            <H2 className={inter.className}>Villega Vila Velha</H2>
            <div>
              <Pencil size={20} onClick={onOpenUpdateModal} />
              <Trash size={20} onClick={onOpenDeleteModal} />
            </div>
          </TitleContainer>
          <Span className={inter.className}>
            Rua Dório Silva, 100 - Vila Guaranhuns, Vila Velha
          </Span>
        </DivTitles>
        <DivP>
          <P className={inter.className}>Lancamento</P>
          <P className={inter.className}>Residencial</P>
        </DivP>
      </Li>
      {isDeleteModalOpen && (
        <Modal variant="delete" title="Deletar empreendimento" />
      )}
      {isUpdateModalOpen && (
        <Modal variant="update" title="Atualizar empreendimento" />
      )}
    </>
  );
};

export default Card;
