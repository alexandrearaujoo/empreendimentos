'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Spinner from '@/components/Spinner';

import { DivAddress, DivButton, Form } from './styles';

import { useUpdateEnterprise } from '@/hooks/useUpdateEnterprise';
import { modalStore } from '@/stores/modalStore';
import { X } from 'lucide-react';

const UpdateModal = () => {
  const onCloseUpdateModal = modalStore((state) => state.onCloseUpdateModal);
  const enterprise = modalStore((state) => state.enterprise);
  const { register, handleSubmit, onSubmit, isSubmitting, address } =
    useUpdateEnterprise(enterprise);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <X size={20} onClick={onCloseUpdateModal} />
      <Select
        {...register('status')}
        options={[
          'Breve lançamento',
          'Lançamento',
          'Em obras',
          'Pronto pra morar'
        ]}
      />
      <Input placeholder="Nome do empreendimento" {...register('name')} />
      <Select options={['Residencial', 'Comercial']} {...register('purpose')} />
      <Input placeholder="CEP" {...register('address.cep')} />
      <DivAddress>
        <p>Rua: {address.street}</p>
        <p>Bairro: {address.district}</p>
        <p>{address.city}</p>
      </DivAddress>
      <Input placeholder="Número" {...register('address.number')} />
      <DivButton>
        <Button disabled={isSubmitting} type="submit">
          {isSubmitting ? (
            <>
              <Spinner /> Atualizando...
            </>
          ) : (
            'Atualizar'
          )}
        </Button>
      </DivButton>
    </Form>
  );
};

export default UpdateModal;
