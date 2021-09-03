import React, { useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import {
  ModalActions,
  ModalContent,
  ModalFrame,
  ModalOverlay,
  ModalTitle,
  TransContainer,
  transitionDuration,
} from './Modal.styles';

const Modal = ({ show, onClose, children }) => {
  const animRef = useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={animRef}
        unmountOnExit
        in={show}
        timeout={transitionDuration}
      >
        <TransContainer ref={animRef}>
          <ModalOverlay onClick={onClose} />
          <ModalFrame>{children}</ModalFrame>
        </TransContainer>
      </CSSTransition>
    </>
  );
};

const Title = ({ children }) => {
  return <ModalTitle>{children}</ModalTitle>;
};

const Content = ({ children }) => {
  return <ModalContent>{children}</ModalContent>;
};

const Actions = ({ children: buttons }) => {
  return <ModalActions>{buttons}</ModalActions>;
};

Modal.Title = Title;
Modal.Content = Content;
Modal.Actions = Actions;

export default Modal;
