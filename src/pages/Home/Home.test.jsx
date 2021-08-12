import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { SearchProvider } from '../../providers/SearchContext';
import * as hooks from '../../providers/SearchContext';
import HomePage from './Home.page';
import ytMock from '../../mocks/youtube-videos-mock.json';

describe('Home component', () => {
  const mockVideos = ytMock.items;

  const renderNode = () => {
    return render(
      <SearchProvider>
        <HomePage />
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

  it('Renders empty if there is no videos', () => {
    const wrapper = renderNode();

    expect(wrapper).toMatchSnapshot();
  });

  it('Renders the video list when there are videos loaded', () => {
    hooks.useSearchContext = jest.fn(() => ({
      result: { items: mockVideos },
    }));

    const node = renderNode();

    const elements = node.getAllByAltText(/thumbnail/i);
    expect(elements.length).toBeGreaterThan(0);
  });
});
