import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Address } from '@/interfaces';
import { api } from '@/lib/api';
import {
  EnterpriseRequest,
  createEnterpriseSchema
} from '@/schemas/createEnterprise';
import { getAddress } from '@/services/getAddress';
import { modalStore } from '@/stores/modalStore';
import { zodResolver } from '@hookform/resolvers/zod';
import { AxiosError } from 'axios';

export const useCreateEnterprise = () => {
  const router = useRouter();
  const onCloseCreateModal = modalStore((state) => state.onCloseCreateModal);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<EnterpriseRequest>({
    resolver: zodResolver(createEnterpriseSchema),
    mode: 'all',
    defaultValues: {
      name: '',
      purpose: 'Residencial',
      status: 'Lançamento',
      address: {
        cep: '',
        city: '',
        district: '',
        number: '',
        state: '',
        street: ''
      }
    }
  });

  const zipCode = watch('address.cep');
  const address = watch('address');

  const handleSetAddress = useCallback(
    (address: Address) => {
      if (!address.cep) return;

      setValue('address.city', address.localidade, {
        shouldValidate: true
      });
      setValue('address.state', address.uf, {
        shouldValidate: true
      });
      setValue('address.street', address.logradouro, {
        shouldValidate: true
      });
      setValue('address.cep', address.cep, {
        shouldValidate: true
      });
      setValue('address.district', address.bairro, {
        shouldValidate: true
      });
    },
    [setValue]
  );

  const handleFetchAddress = useCallback(
    async (zipCode: string) => {
      try {
        const address = await getAddress(zipCode);

        handleSetAddress(address);
      } catch (error) {
        toast.error('CEP não encontrado!');
      }
    },
    [handleSetAddress]
  );

  useEffect(() => {
    if (zipCode && zipCode.length !== 8) return;

    handleFetchAddress(zipCode);
  }, [handleFetchAddress, zipCode]);

  const onSubmit = async (data: EnterpriseRequest) => {
    try {
      await api.post('/enterprises', data);
    } catch (error) {
      toast.error('Erro ao criar empreendimento!');
    } finally {
      router.refresh();
      reset();
      toast.success('Empreendimento criado com sucesso!');
      onCloseCreateModal();
    }
  };

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    address
  };
};
