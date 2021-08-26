import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import LoginForm from './LoginForm.component';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('../../providers/AuthContext.jsx', () => {
  return {
    useAuthContext: () => ({
      login: jest.fn(),
      error: null,
      loading: false,
    }),
  };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Login form', () => {
  const renderForm = () => render(<LoginForm />);

  it('Catches the provided data', () => {
    const form = renderForm();
    const inputs = form.container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);

    fireEvent.change(inputs[0], { target: { value: 'Test' } });
    fireEvent.change(inputs[1], { target: { value: 'Pass' } });
  });
});
