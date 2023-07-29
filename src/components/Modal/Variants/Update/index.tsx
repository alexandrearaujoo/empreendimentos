'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';

import { DivAddress, Form } from './styles';

import { modalStore } from '@/stores/modalStore';
import { X } from 'lucide-react';

const UpdateModal = () => {
  const onCloseUpdateModal = modalStore((state) => state.onCloseUpdateModal);

  return (
    <Form>
      <X size={20} onClick={onCloseUpdateModal} />
      <Input placeholder="Lançamento" />
      <Input placeholder="Nome do empreendimento" />
      <Input placeholder="Residencial" />
      <Input placeholder="CEP" />
      <DivAddress>
        <p>Rua</p>
        <p>Bairro</p>
        <p>SP</p>
      </DivAddress>
      <Input placeholder="Número" />
      <Button maxW={19.625}>Atualizar</Button>
    </Form>
  );
};

export default UpdateModal;
