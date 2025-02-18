import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import UserModal from './UserModal.component';
import * as AuthCtx from '../../providers/AuthContext';

const userMock = {
  displayName: 'Chris',
  uid: '1234456',
  photoURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO4MHTpDqZpz63MDWC05Oy3KOOXTmh9Z70w&usqp=CAU',
};

const noPhotoMock = {
  displayName: 'Max Jens',
  uid: '654321',
};

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

jest.mock('../../providers/AuthContext.jsx', () => ({
  useAuthContext: jest.fn(),
}));

describe('User modal', () => {
  beforeAll(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);

    AuthCtx.useAuthContext.mockImplementation(() => ({
      creds: userMock,
    }));
  });

  afterEach(cleanup);

  const renderModal = () => render(<UserModal showModal />);

  it('Renders correctly in the page', () => {
    const modal = renderModal();
    modal.getByText(userMock.displayName);
    modal.getByText(RegExp(`${userMock.uid}`, `i`));
    const img = modal.getByAltText(/profile/i);

    expect(img.src).toBe(userMock.photoURL);
  });

  it('Changes to image picker and renders correctly', () => {
    const modal = renderModal();
    const imgChangeBtn = modal.getByText(/Change Image/i);
    fireEvent.click(imgChangeBtn);
    modal.getByText(/Save Image/i);
  });

  it('Shows the initials if no photo is provided', () => {
    AuthCtx.useAuthContext.mockImplementation(() => ({
      creds: noPhotoMock,
    }));

    const modal = renderModal();
    modal.getByText(/MJ/);
    modal.getByText(noPhotoMock.displayName);
    modal.getByText(RegExp(`${noPhotoMock.uid}`, `i`));
  });
});
