import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Navbar from './Navbar.component';
import * as AuthCtx from '../../providers/AuthContext';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Navbar', () => {
  beforeAll(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  });

  const renderNav = () => {
    return render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );
  };

  it('Shows the initials if no picture is available', () => {
    jest.spyOn(AuthCtx, 'useAuthContext').mockImplementation(() => ({
      creds: {
        displayName: 'John Doe',
      },
    }));

    const nav = renderNav();
    nav.getByText(/JD/);
  });
});
