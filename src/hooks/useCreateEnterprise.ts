import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';

import { Address } from '@/interfaces';
import {
  EnterpriseRequest,
  createEnterpriseSchema
} from '@/schemas/createEnterprise';
import { getAddress } from '@/services/getAddress';
import { zodResolver } from '@hookform/resolvers/zod';

export const useCreateEnterprise = () => {
  const router = useRouter();

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
        console.log(error);
      }
    },
    [handleSetAddress]
  );

  useEffect(() => {
    if (zipCode.length !== 8) return;

    handleFetchAddress(zipCode);
  }, [handleFetchAddress, zipCode]);

  const onSubmit = async (data: EnterpriseRequest) => {
    console.log(data);
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
