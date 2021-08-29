import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import * as AuthCtx from '../../providers/AuthContext';
import LoginForm from './LoginForm.component';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Login form', () => {
  const renderForm = () =>
    render(<LoginForm onSuccess={jest.fn()} onError={jest.fn()} />);

  it('Catches the provided data', async () => {
    const prom = Promise.resolve(null);
    const login = jest.fn(() => prom);

    jest.spyOn(AuthCtx, 'useAuthContext').mockImplementation(() => ({
      login,
      error: null,
      loading: false,
    }));

    const form = renderForm();
    const inputs = form.container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);

    fireEvent.change(inputs[0], { target: { value: 'Test' } });
    fireEvent.change(inputs[1], { target: { value: 'Pass' } });
    fireEvent.click(form.getByText(/log in/i));

    await act(() => prom);
  });
});
