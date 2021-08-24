import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { SearchProvider } from '../../providers/SearchContext';
import * as SearchCtx from '../../providers/SearchContext';
import * as YTHook from '../../utils/hooks/useYoutube';
import HomePage from './Home.page';
import Navbar from '../../components/Navbar';
import ytMock from '../../mocks/youtube-videos-mock.json';
import * as ytAPI from '../../providers/youtubeAPI';

describe('Home component', () => {
  const mockVideos = ytMock.items;

  const renderNode = () => {
    return render(
      <SearchProvider>
        <MemoryRouter>
          <Navbar />
          <HomePage />
        </MemoryRouter>
      </SearchProvider>
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
      result: { items: mockVideos },
    }));

    const node = renderNode();

    const elements = node.getAllByAltText(/thumbnail/i);
    expect(elements.length).toBeGreaterThan(0);
  });

  it('Renders mocked videos when there is not sucessfull fetch', () => {
    SearchCtx.useSearchContext = jest.fn(() => ({
      search: YTHook.useYoutube().search,
    }));

    ytAPI.queryVideos = jest.fn(() => null);
    const node = renderNode();
    const searchBar = node.getByPlaceholderText(/search/i);
    fireEvent.input(searchBar, { target: { value: 'dnb' } });
    fireEvent.submit(searchBar);
    expect(ytAPI.queryVideos).toBeCalled();
  });
});
