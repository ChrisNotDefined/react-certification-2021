import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App.component';

describe('App component', () => {
  it('Must always contain the navbar', () => {
    const { container } = render(<App />);
    expect(container.querySelector('nav')).not.toBeUndefined();
  });

  it('Must contain the main element', () => {
    const { container } = render(<App />);
    expect(container.querySelector('main')).not.toBeUndefined();
  });

  it('Toggles the sidebar', () => {
    const { container } = render(<App />);

    fireEvent.click(container.querySelector('nav').querySelector('button'));

    expect(container.querySelector('aside')).not.toBeUndefined();

    fireEvent.click(container.querySelector('aside').previousSibling);

    setTimeout(() => {
      expect(container.querySelector('aside')).toBeUndefined();
    }, 500);
  });
});
