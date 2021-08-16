import React from 'react';
import { createPortal } from 'react-dom';
import { useAuthContext } from '../../providers/AuthContext';
import Avatar from '../Avatar';
import Modal from '../Modal';
import { AccountDetails, AccountID, AccountName } from './UserModal.styles';

const UserModal = ({ showModal, onClose }) => {
  const { user, logout } = useAuthContext();

  const closeModal = () => {
    onClose();
  };

  const handleLogout = () => {
    closeModal();
    setTimeout(logout, 300);
  };

  return createPortal(
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Title>Your Account</Modal.Title>
      <Modal.Content>
        <AccountDetails>
          <Avatar size="8em" src={user?.avatarUrl} />
          <AccountName>{user?.name}</AccountName>
          <AccountID>ID: {user?.id}</AccountID>
        </AccountDetails>
      </Modal.Content>
      <Modal.Actions>
        <button type="button" onClick={handleLogout}>
          Log Out
        </button>
        <button onClick={closeModal} className="primary" type="submit">
          Close
        </button>
      </Modal.Actions>
    </Modal>,
    document.getElementById('modal')
  );
};

export default UserModal;
