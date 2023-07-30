import { Inter } from 'next/font/google';
import { ComponentType } from 'react';

import { DialogContent, DialogHeader, DialogRoot, DialogTitle } from './styles';
import CreateModal from './Variants/Create';
import DeleteModal from './Variants/Delete';
import UpdateModal from './Variants/Update';

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

interface Variants {
  [key: string]: ComponentType;
}

const variants: Variants = {
  create: () => <CreateModal />,
  update: () => <UpdateModal />,
  delete: () => <DeleteModal />
};

const Modal = ({
  variant,
  title
}: {
  variant: 'create' | 'update' | 'delete';
  title: string;
}) => {
  const ModalComponent = variants[variant];

  return (
    <DialogRoot>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className={inter.className}>{title}</DialogTitle>
        </DialogHeader>
        <ModalComponent />
      </DialogContent>
    </DialogRoot>
  );
};

export default Modal;
