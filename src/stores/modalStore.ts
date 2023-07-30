import { Enterprise } from '@/interfaces';
import { create } from 'zustand';

interface ModalStore {
  isCreateModalOpen: boolean;
  isUpdateModalOpen: boolean;
  isDeleteModalOpen: boolean;
  enterpriseId: number | null;
  enterprise: Enterprise | null;
  onOpenCreateModal: () => void;
  onOpenUpdateModal: (enterprise: Enterprise | null) => void;
  onOpenDeleteModal: (id: number | null) => void;
  onCloseCreateModal: () => void;
  onCloseUpdateModal: () => void;
  onCloseDeleteModal: () => void;
}

export const modalStore = create<ModalStore>((set) => ({
  isCreateModalOpen: false,
  enterpriseId: null,
  enterprise: null,
  onOpenCreateModal: () => set({ isCreateModalOpen: true }),
  onCloseCreateModal: () => set({ isCreateModalOpen: false }),
  isUpdateModalOpen: false,
  onOpenUpdateModal: (enterprise: Enterprise | null) =>
    set({ isUpdateModalOpen: true, enterprise }),
  onCloseUpdateModal: () => set({ isUpdateModalOpen: false }),
  isDeleteModalOpen: false,
  onOpenDeleteModal: (id: number | null) =>
    set({ isDeleteModalOpen: true, enterpriseId: id }),
  onCloseDeleteModal: () => set({ isDeleteModalOpen: false })
}));
