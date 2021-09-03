import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from './NotFound.page';

describe('Not Found Page', () => {
  const renderPage = () => render(<NotFoundPage />);

  it('Renders as expected and redirects to home', () => {
    const page = renderPage();

    page.getByText(/Ooops, seems like you wanted to go to an unexistant page/i);
  });
});
