import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar.component';
import * as AuthCtx from '../../providers/AuthContext';

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

  const renderSidebar = () => render(<Sidebar />);

  it('Must use the aside tag', () => {
    jest.spyOn(AuthCtx, 'useAuthContext').mockImplementation(() => ({
      creds: null,
    }));
    const { container } = renderSidebar();
    expect(container.querySelector('aside')).not.toBeUndefined();
  });

  it('Renders the initials if there is no photo', () => {
    jest.spyOn(AuthCtx, 'useAuthContext').mockImplementation(() => ({
      creds: {
        displayName: 'John Doe',
      },
    }));

    const node = renderSidebar();
    node.getByText(/JD/);
  });
});
