import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { SearchProvider } from '../../providers/SearchContext';
import VideoCard from './VideoCard.component';

describe('VideoCard component', () => {
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

  afterEach(cleanup);

  it('Loads the video', () => {
    const mockVideo = {
      kind: 'youtube#searchResult',
      etag: 'by0t_nrT2TB-IQkQpgSWUVUwpKI',
      id: {
        kind: 'youtube#video',
        videoId: 'Po3VwR_NNGk',
      },
      snippet: {
        publishedAt: '2019-03-05T03:52:55Z',
        channelId: 'UCXmAOGwFYxIq5qrScJeeV4g',
        title: 'Wizeline hace sentir a empleados como en casa',
        description:
          'En el 2014, Bismarck fundó Wizeline, compañía tecnológica que trabaja con los corporativos ofreciendo una plataforma para que desarrollen software de forma ...',
        thumbnails: {
          default: {
            url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/default.jpg',
            width: 120,
            height: 90,
          },
          medium: {
            url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/mqdefault.jpg',
            width: 320,
            height: 180,
          },
          high: {
            url: 'https://i.ytimg.com/vi/Po3VwR_NNGk/hqdefault.jpg',
            width: 480,
            height: 360,
          },
        },
        channelTitle: 'El Economista TV',
        liveBroadcastContent: 'none',
        publishTime: '2019-03-05T03:52:55Z',
      },
    };

    const wrapper = render(
      <SearchProvider>
        <VideoCard videoObj={mockVideo} />
      </SearchProvider>
    );

    wrapper.getByText(mockVideo.snippet.title);
    wrapper.getByText(mockVideo.snippet.channelTitle);
    wrapper.getByText(mockVideo.snippet.description);
    expect(wrapper.container.querySelector('img').src).toBe(
      mockVideo.snippet.thumbnails.default.url
    );
  });

  it('Render an error if video is not provided', () => {
    const wrapper = render(
      <SearchProvider>
        <VideoCard />
      </SearchProvider>
    );

    wrapper.getByText(/There is no info to render/i);
  });

  it('Sets channel id as element id if no videoId exists', () => {
    const mockVideo = {
      kind: 'youtube#searchResult',
      etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
      id: {
        kind: 'youtube#channel',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
      },
      snippet: {
        publishedAt: '2014-09-27T01:39:18Z',
        channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        title: 'Wizeline',
        description:
          "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
        thumbnails: {
          default: {
            url:
              'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
          },
          medium: {
            url:
              'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
          },
          high: {
            url:
              'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
          },
        },
        channelTitle: 'Wizeline',
        liveBroadcastContent: 'upcoming',
        publishTime: '2014-09-27T01:39:18Z',
      },
    };

    const node = render(
      <SearchProvider>
        <VideoCard videoObj={mockVideo} />
      </SearchProvider>
    );

    expect(node.getAllByText(/wizeline/i).length).toBeGreaterThan(0);
  });

  it('Adapts image to screen size', () => {
    const renderNode = () => {
      const mockVideo = {
        kind: 'youtube#searchResult',
        etag: '_PVKwNJf_qw9nukFeRFOtQ837o0',
        id: {
          kind: 'youtube#channel',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
        },
        snippet: {
          publishedAt: '2014-09-27T01:39:18Z',
          channelId: 'UCPGzT4wecuWM0BH9mPiulXg',
          title: 'Wizeline',
          description:
            "Wizeline transforms how teams build technology. Its customers accelerate the delivery of innovative products with proven solutions, which combine Wizeline's ...",
          thumbnails: {
            default: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s88-c-k-c0xffffffff-no-rj-mo',
            },
            medium: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s240-c-k-c0xffffffff-no-rj-mo',
            },
            high: {
              url:
                'https://yt3.ggpht.com/ytc/AAUvwnighSReQlmHl_S_vSfvnWBAG5Cw4A0YxtE0tm5OpQ=s800-c-k-c0xffffffff-no-rj-mo',
            },
          },
          channelTitle: 'Wizeline',
          liveBroadcastContent: 'upcoming',
          publishTime: '2014-09-27T01:39:18Z',
        },
      };

      return render(
        <SearchProvider>
          <VideoCard videoObj={mockVideo} />
        </SearchProvider>
      );
    };

    let screenWidth = 500;
    // window.matchMedia is not accessible by Jest, generating a mockMethod
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: (() => {
          const value = Number(query.match(/\d+/gm)[0]);
          return value >= screenWidth;
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

    renderNode();
    cleanup();

    screenWidth = 700;
    renderNode();
  });
});
