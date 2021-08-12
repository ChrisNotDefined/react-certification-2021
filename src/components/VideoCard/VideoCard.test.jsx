import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { SearchProvider } from '../../providers/SearchContext';
import VideoCard from './VideoCard.component';
import ytMock from '../../mocks/youtube-videos-mock.json';

describe('VideoCard component', () => {
  const mockVideo = ytMock.items[2];
  let wrapper = null;

  const renderNode = () => {
    const vid = ytMock.items[2];

    return render(
      <BrowserRouter>
        <SearchProvider>
          <VideoCard videoObj={vid} />
        </SearchProvider>
      </BrowserRouter>
    );
  };

  beforeAll(() => {
    // window.matchMedia is not accessible by Jest, generating a mockMethod
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

  beforeEach(() => {
    wrapper = renderNode();
  });

  afterEach(cleanup);

  it('Loads the video', () => {
    wrapper.getByText(mockVideo.snippet.title);
    wrapper.getByText(mockVideo.snippet.channelTitle);
    wrapper.getByText(mockVideo.snippet.description);
    expect(wrapper.container.querySelector('img').src).toBe(
      mockVideo.snippet.thumbnails.default.url
    );
  });

  it('Render an error if video is not provided', () => {
    wrapper = render(
      <SearchProvider>
        <VideoCard />
      </SearchProvider>
    );

    wrapper.getByText(/There is no info to render/i);
  });

  it('Sets channel id as element id if no videoId exists', () => {
    expect(wrapper.getAllByText(/wizeline/i).length).toBeGreaterThan(0);
  });

  it('Adapts image to screen size', () => {
    let screenWidth;
    // window.matchMedia is not accessible by Jest, generating a mockMethod
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: (() => {
          const value = Number(query.match(/\d+/gm)[0]);
          return value <= screenWidth;
        })(),
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });

    screenWidth = 510;
    wrapper = renderNode();
    expect(wrapper.container.querySelector('img').src).toBe(
      mockVideo.snippet.thumbnails.medium.url
    );

    cleanup();

    screenWidth = 710;
    wrapper = renderNode();
    expect(wrapper.container.querySelector('img').src).toBe(
      mockVideo.snippet.thumbnails.high.url
    );
  });

  it('Routes to the video page', () => {
    const elem = wrapper.getByText(mockVideo.snippet.title);
    fireEvent.click(elem.parentElement);

    expect(window.location.href).toMatch(/video/i);
  });
});
