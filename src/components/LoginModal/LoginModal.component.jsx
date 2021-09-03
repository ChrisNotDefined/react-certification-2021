import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import LoginForm from '../LoginForm';
import Modal from '../Modal';
import RegisterForm from '../RegisterForm';

const LoginModal = ({ showModal, onClose }) => {
  const [wantRegister, setWantRegister] = useState(false);

  const closeModal = () => {
    onClose();
  };

  const toggleRegister = () => {
    setWantRegister((prev) => !prev);
  };

  const SelectForm = () => {
    if (wantRegister) return <RegisterForm onSucess={closeModal} />;
    return <LoginForm onSuccess={closeModal} />;
  };

  return createPortal(
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Title>Log In</Modal.Title>
      <Modal.Content>
        <SelectForm />
      </Modal.Content>
      <Modal.Actions>
        <button type="button" onClick={toggleRegister}>
          {wantRegister ? 'Login' : 'Register'}
        </button>
        <button type="button" onClick={closeModal}>
          Cancel
        </button>
      </Modal.Actions>
    </Modal>,
    document.getElementById('modal')
  );
};

export default LoginModal;
