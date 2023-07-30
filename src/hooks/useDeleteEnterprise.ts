import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

import { api } from '@/lib/api';
import { modalStore } from '@/stores/modalStore';

export const useDeleteEnterprise = (id: number | null) => {
  const router = useRouter();
  const onCloseDeleteModal = modalStore((state) => state.onCloseDeleteModal);

  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    try {
      await api.delete(`/enterprises/${id}`);
    } catch (error) {
      toast.error('Erro ao deletar empreendimento');
    } finally {
      setLoading(false);
      router.refresh();
      toast.success('Empreendimento deletado com sucesso!');
      onCloseDeleteModal();
    }
  };

  return {
    loading,
    onClick
  };
};
