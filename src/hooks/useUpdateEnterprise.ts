import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

import { Address, Enterprise } from '@/interfaces';
import { api } from '@/lib/api';
import {
  EnterpriseRequest,
  createEnterpriseSchema
} from '@/schemas/createEnterprise';
import { getAddress } from '@/services/getAddress';
import { modalStore } from '@/stores/modalStore';
import { zodResolver } from '@hookform/resolvers/zod';

export const useUpdateEnterprise = (enterprise: Enterprise | null) => {
  const router = useRouter();
  const onCloseUpdateModal = modalStore((state) => state.onCloseUpdateModal);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isSubmitting, errors }
  } = useForm<EnterpriseRequest>({
    resolver: zodResolver(createEnterpriseSchema),
    defaultValues: enterprise || {}
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
      const address = await getAddress(zipCode);

      handleSetAddress(address);
    },
    [handleSetAddress]
  );

  useEffect(() => {
    if (zipCode && zipCode.length !== 8) return;

    handleFetchAddress(zipCode);
  }, [handleFetchAddress, zipCode]);

  const onSubmit = async (data: EnterpriseRequest) => {
    try {
      await api.patch(`/enterprises/${enterprise?.id}`, data);
    } catch (error) {
      toast.error('Erro ao atualizar empreendimento!');
    } finally {
      router.refresh();
      onCloseUpdateModal();
      toast.success('Empreendimento atualizado com sucesso!');
    }
  };

  return { onSubmit, register, handleSubmit, isSubmitting, errors, address };
};
