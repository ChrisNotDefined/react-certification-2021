import React from 'react';
import { render } from '@testing-library/react';
import RegisterForm from './RegisterForm.component';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Register Form', () => {
  const renderNode = () =>
    render(<RegisterForm onSucess={jest.fn()} onError={jest.fn()} />);

  it('Renders the form Correctly', () => {
    const node = renderNode();
    node.getByText(/register/i);
  });
});
