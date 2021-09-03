import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import * as AuthCtx from '../../providers/AuthContext';
import * as FBAuth from '../../providers/firebaseAuth';
import LoginForm from './LoginForm.component';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

const userMock = {
  displayName: 'Chris',
  uid: '1234456',
  photoURL:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMO4MHTpDqZpz63MDWC05Oy3KOOXTmh9Z70w&usqp=CAU',
};

describe('Login form', () => {
  const renderForm = () =>
    render(
      <AuthCtx.AuthProvider>
        <LoginForm onSuccess={jest.fn()} onError={jest.fn()} />
      </AuthCtx.AuthProvider>
    );

  it('Catches the provided data', async () => {
    const prom = Promise.resolve(userMock);
    const login = jest.fn(() => prom);

    jest.spyOn(FBAuth, 'signUser').mockImplementation(login);

    const form = renderForm();
    const inputs = form.container.querySelectorAll('input');
    expect(inputs).toHaveLength(2);

    fireEvent.change(inputs[0], { target: { value: 'Test' } });
    fireEvent.change(inputs[1], { target: { value: 'Pass' } });
    fireEvent.click(form.getByText(/log in/i));

    await act(() => prom);
  });
});
