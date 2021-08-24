import React from 'react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Search from './Search.component';
import { SearchProvider } from '../../providers/SearchContext';

describe('Search component', () => {
  let node;

  beforeEach(() => {
    node = render(
      <SearchProvider>
        <BrowserRouter>
          <Search />
        </BrowserRouter>
      </SearchProvider>
    );
  });

  afterEach(cleanup);

  it('Searches when pressing enter', () => {
    const input = node.getByPlaceholderText(/search/i);
    fireEvent.input(input, { target: { value: 'dnb' } });
    fireEvent.submit(node.container.querySelector('form'));
  });

  it('Cancels search if input is empty', () => {
    fireEvent.submit(node.container.querySelector('form'));
  });

  it('Reroutes when submitin in another page', () => {
    cleanup();
    node = render(
      <SearchProvider>
        <MemoryRouter initialEntries={['/video=:id']}>
          <Search />
        </MemoryRouter>
      </SearchProvider>
    );

    const input = node.getByPlaceholderText(/search/i);
    fireEvent.input(input, { target: { value: 'dnb' } });
    fireEvent.submit(node.container.querySelector('form'));
  });
});
