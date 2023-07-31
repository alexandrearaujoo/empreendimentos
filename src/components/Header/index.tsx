'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import Button from '../Button';
import { H1, HeaderStyled } from './styles';

import { modalStore } from '@/stores/modalStore';

const Modal = dynamic(() => import('../Modal'), { ssr: false });

const Header = () => {
  const isCreateModalOpen = modalStore((state) => state.isCreateModalOpen);
  const onCreateModalOpen = modalStore((state) => state.onOpenCreateModal);

  return (
    <>
      <HeaderStyled>
        <Link href="/">
          <H1>Empreendimentos</H1>
        </Link>
        <Button
          icon
          maxW={12}
          onClick={onCreateModalOpen}
          headerButton
        ></Button>
      </HeaderStyled>
      {isCreateModalOpen && (
        <Modal variant="create" title="Criar empreendimento" />
      )}
    </>
  );
};

export default Header;
