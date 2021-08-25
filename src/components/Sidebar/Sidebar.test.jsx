import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar.component';
import { AuthProvider } from '../../providers/AuthContext';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Sidebar component', () => {
  beforeAll(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  });

  it('Must use the aside tag', () => {
    const { container } = render(
      <AuthProvider>
        <Sidebar />
      </AuthProvider>
    );
    expect(container.querySelector('aside')).not.toBeUndefined();
  });
});
