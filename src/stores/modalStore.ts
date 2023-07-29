import { create } from 'zustand';

interface ModalStore {
  isCreateModalOpen: boolean;
  isUpdateModalOpen: boolean;
  isDeleteModalOpen: boolean;
  onOpenCreateModal: () => void;
  onOpenUpdateModal: () => void;
  onOpenDeleteModal: () => void;
  onCloseCreateModal: () => void;
  onCloseUpdateModal: () => void;
  onCloseDeleteModal: () => void;
}

export const modalStore = create<ModalStore>((set) => ({
  isCreateModalOpen: false,
  onOpenCreateModal: () => set({ isCreateModalOpen: true }),
  onCloseCreateModal: () => set({ isCreateModalOpen: false }),
  isUpdateModalOpen: false,
  onOpenUpdateModal: () => set({ isUpdateModalOpen: true }),
  onCloseUpdateModal: () => set({ isUpdateModalOpen: false }),
  isDeleteModalOpen: false,
  onOpenDeleteModal: () => set({ isDeleteModalOpen: true }),
  onCloseDeleteModal: () => set({ isDeleteModalOpen: false })
}));
