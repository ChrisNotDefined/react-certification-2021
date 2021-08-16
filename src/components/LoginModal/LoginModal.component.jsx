import React from 'react';
import { createPortal } from 'react-dom';
import { SpinnerIcon } from '../../Icons';
import { useAuthContext } from '../../providers/AuthContext';
import { useForm } from '../../utils/hooks/useForm';
import FormField from '../FormField';
import Modal from '../Modal';
import { ErrorMsg, StatusContainer } from './LoginModal.styles';

const LoginModal = ({ showModal, onClose }) => {
  const { login, error, loading } = useAuthContext();

  const { values, onChange, onSubmit, clearForm } = useForm(() => {
    login(values.username, values.password).then(() => {
      if (!error) onClose();
    });
  });

  const closeModal = () => {
    clearForm();
    onClose();
  };

  return createPortal(
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Title>Log In</Modal.Title>
      <Modal.Content>
        <form>
          <FormField
            name="username"
            labelText="Name:"
            value={values.username || ''}
            {...{ onChange }}
          />
          <FormField
            type="password"
            name="password"
            labelText="Password:"
            value={values.password || ''}
            {...{ onChange }}
          />
        </form>
        <StatusContainer>
          {loading && (
            <SpinnerIcon
              width="2em"
              animate
              primary="var(--primary)"
              accent="var(--accent-brighter)"
            />
          )}
          {error && <ErrorMsg>{error}</ErrorMsg>}
        </StatusContainer>
      </Modal.Content>
      <Modal.Actions>
        <button onClick={onSubmit} className="primary" type="submit">
          Log In
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
