import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { SearchProvider } from '../../providers/SearchContext';
import * as SearchCtx from '../../providers/SearchContext';
import HomePage from './Home.page';
import Navbar from '../../components/Navbar';
import ytMock from '../../mocks/youtube-videos-mock.json';
import { AuthProvider } from '../../providers/AuthContext';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Home component', () => {
  beforeAll(() => {
    const modalRoot = document.createElement('div');
    modalRoot.setAttribute('id', 'modal');
    document.body.appendChild(modalRoot);
  });

  const renderNode = () => {
    return render(
      <AuthProvider>
        <SearchProvider>
          <MemoryRouter>
            <Navbar />
            <HomePage />
          </MemoryRouter>
        </SearchProvider>
      </AuthProvider>
    );
  };

  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  afterEach(cleanup);

  it('Has a section element', () => {
    const { container } = renderNode();

    expect(container.querySelector('section')).not.toBeUndefined();
  });

  it("Renders welcome text if there is no videos and hasn't fetched anything", () => {
    const wrapper = renderNode();

    wrapper.getByText(/Welcome/i);
  });

  it('Renders the video list when there are videos loaded', () => {
    SearchCtx.useSearchContext = jest.fn(() => ({
      result: ytMock,
      search: jest.fn(() => {}),
    }));

    const node = renderNode();

    const elements = node.getAllByAltText(/thumbnail/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('Renders mocked videos when there is not sucessfull fetch', () => {
    const search = jest.fn(() => {});

    SearchCtx.useSearchContext = jest.fn(() => ({
      result: ytMock,
      search,
    }));

    const node = renderNode();
    const searchBar = node.getByPlaceholderText(/search/i);
    fireEvent.input(searchBar, { target: { value: 'dnb' } });
    fireEvent.submit(searchBar);
    expect(search).toBeCalled();
  });

  it('Shows the Loading screen when fetching', () => {
    SearchCtx.useSearchContext = jest.fn(() => ({
      loading: true,
    }));

    const node = renderNode();

    node.getByText(/Loading/i);
  });
});
