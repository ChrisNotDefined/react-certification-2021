import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { SpinnerIcon } from '../../Icons';
import { useAuthContext } from '../../providers/AuthContext';
import { updateUser } from '../../providers/firebaseAuth';
import { uploadImage } from '../../providers/firebaseStorage';
import { generateInitials } from '../../utils/strings';
import Avatar from '../Avatar';
import ImageInput from '../ImageInput/ImageInput.component';
import Modal from '../Modal';
import {
  AccountDetails,
  AccountID,
  AccountName,
  ChangeImageButton,
  EditImageForm,
  EditImageOptions,
  UploadingIndicator,
} from './UserModal.styles';

const UserModal = ({ showModal, onClose }) => {
  const { creds, logout } = useAuthContext();
  const [wantChangeImg, setWantChangeImg] = useState(false);
  const initials = generateInitials(creds?.displayName);

  const cancelImageForm = () => {
    setWantChangeImg(false);
  };

  const closeModal = () => {
    onClose();
    setTimeout(cancelImageForm, 300);
  };

  const handleLogout = () => {
    closeModal();
    setTimeout(logout, 300);
  };

  const getImageForm = () => {
    setWantChangeImg(true);
  };

  const ModalContent = () => {
    const [selectedImg, setSelectedeImg] = useState(null);
    const [uploading, setUploading] = useState(false);
    const handleFileSelected = (file) => {
      if (!file) return;
      setSelectedeImg(file);
    };

    const handleUpload = () => {
      if (!selectedImg) return;
      setUploading(true);
      uploadImage(selectedImg, creds.uid).then((url) => {
        console.log('Success?');
        updateUser({ photo: url });
        setUploading(false);
        closeModal();
      });
    };

    if (!wantChangeImg) {
      return (
        <>
          <Avatar
            alt="Profile"
            size="8rem"
            initials={!creds?.photoURL && initials}
            src={creds?.photoURL}
          />
          <ChangeImageButton onClick={getImageForm} type="button">
            Change Image
          </ChangeImageButton>
          <AccountName>{creds?.displayName}</AccountName>
          <AccountID>ID: {creds?.uid}</AccountID>
        </>
      );
    }

    return (
      <EditImageForm>
        <ImageInput onFileSelected={handleFileSelected} />
        <EditImageOptions>
          {uploading && (
            <UploadingIndicator>
              <SpinnerIcon animate width="3em" />
            </UploadingIndicator>
          )}
          <button
            type="button"
            disabled={!selectedImg}
            onClick={selectedImg && handleUpload}
          >
            Save Image
          </button>
          <button type="button" onClick={cancelImageForm}>
            Cancel
          </button>
        </EditImageOptions>
      </EditImageForm>
    );
  };

  return createPortal(
    <Modal show={showModal} onClose={closeModal}>
      <Modal.Title>Your Account</Modal.Title>
      <Modal.Content>
        <AccountDetails>
          <ModalContent />
        </AccountDetails>
      </Modal.Content>
      <Modal.Actions>
        <button type="button" onClick={handleLogout}>
          Log Out
        </button>
        <button onClick={closeModal} className="primary" type="button">
          Close
        </button>
      </Modal.Actions>
    </Modal>,
    document.getElementById('modal')
  );
};

export default UserModal;
