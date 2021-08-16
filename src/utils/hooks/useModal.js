import { useState } from 'react';

const useModal = () => {
  const [modal, setModal] = useState(false);

  const closeModal = () => {
    setModal(false);
  };

  const openModal = () => {
    setModal(true);
  };

  return { showModal: modal, onClose: closeModal, openModal };
};

export { useModal };
