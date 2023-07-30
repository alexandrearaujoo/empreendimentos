'use client';

import Button from '@/components/Button';
import Input from '@/components/Input';
import Select from '@/components/Select';
import Spinner from '@/components/Spinner';

import { DivAddress, Form } from './styles';

import { useCreateEnterprise } from '@/hooks/useCreateEnterprise';
import { modalStore } from '@/stores/modalStore';
import { X } from 'lucide-react';

const CreateModal = () => {
  const onCloseCreateModal = modalStore((state) => state.onCloseCreateModal);

  const { register, handleSubmit, onSubmit, address, errors, isSubmitting } =
    useCreateEnterprise();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <X size={20} onClick={onCloseCreateModal} />
      <Select
        {...register('status')}
        options={[
          'Breve lançamento',
          'Lançamento',
          'Em obras',
          'Pronto pra morar'
        ]}
      />
      <Input
        placeholder="Nome do empreendimento"
        {...register('name')}
        errors={errors.name?.message}
      />
      <Select options={['Residencial', 'Comercial']} {...register('purpose')} />
      <Input
        maxLength={9}
        placeholder="CEP"
        {...register('address.cep')}
        errors={errors.address?.cep?.message}
        autoComplete="off"
      />
      {address.city && (
        <DivAddress>
          <p>{address.street}</p>
          <p>{address.district}</p>
          <p>{address.state}</p>
        </DivAddress>
      )}
      <Input
        placeholder="Número"
        {...register('address.number')}
        errors={errors.address?.number?.message}
      />
      <Button maxW={19.625} type="submit">
        {isSubmitting ? (
          <>
            <Spinner /> Criando...
          </>
        ) : (
          'Criar'
        )}
      </Button>
    </Form>
  );
};

export default CreateModal;
