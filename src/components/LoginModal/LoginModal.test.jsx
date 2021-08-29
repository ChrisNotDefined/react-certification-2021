import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import LoginModal from './LoginModal.component';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Login Modal', () => {
  beforeAll(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  });

  const renderNode = () => render(<LoginModal showModal onClose={jest.fn()} />);

  it('Renders as expected and toggles forms', () => {
    const node = renderNode();
    const btn = node.getByText(/Register/i);
    expect(btn).toBeInTheDocument();

    act(() => {
      fireEvent.click(btn);
    });

    const btn2 = node.getByText(/Login/i);
    expect(btn2).toBeInTheDocument();

    act(() => {
      fireEvent.click(node.getByText(/Cancel/i));
    });
  });
});
