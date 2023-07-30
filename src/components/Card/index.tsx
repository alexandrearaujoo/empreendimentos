'use client';

import dynamic from 'next/dynamic';
import { Inter } from 'next/font/google';

import { DivP, DivTitles, H2, Li, P, Span, TitleContainer } from './styles';

import { Enterprise } from '@/interfaces';
import { modalStore } from '@/stores/modalStore';
import { Pencil, Trash } from 'lucide-react';

const Modal = dynamic(() => import('@/components/Modal'), { ssr: false });

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

const Card = ({ enterprise }: { enterprise: Enterprise }) => {
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
            <H2 className={inter.className}>{enterprise.name}</H2>
            <div>
              <Pencil size={20} onClick={() => onOpenUpdateModal(enterprise)} />
              <Trash
                size={20}
                onClick={() => onOpenDeleteModal(enterprise.id)}
              />
            </div>
          </TitleContainer>
          <Span className={inter.className}>
            {enterprise.address.street}, {enterprise.address.number} -{' '}
            {enterprise.address.district}
          </Span>
        </DivTitles>
        <DivP>
          <P className={inter.className}>{enterprise.status}</P>
          <P className={inter.className}>{enterprise.purpose}</P>
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
