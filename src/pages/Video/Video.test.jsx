import { cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { SearchProvider } from '../../providers/SearchContext';
import * as hooks from '../../providers/SearchContext';
import VideoPage from './Video.page';

describe('Video Page', () => {
  const mockVideos = [
    {
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
    },
    {
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
    },
  ];

  const renderNode = () =>
    render(
      <SearchProvider>
        <MemoryRouter>
          <VideoPage />
        </MemoryRouter>
      </SearchProvider>
    );

  afterEach(cleanup);

  it('Renders the video section', () => {
    const node = renderNode();
    const iframe = node.container.querySelector('iframe');

    expect(iframe).not.toBeUndefined();
  });

  it('Renders the video list', () => {
    hooks.useSearchContext = jest.fn(() => ({
      result: { items: mockVideos },
      selected: mockVideos[0],
      search: jest.fn(),
    }));

    const node = renderNode();
    expect(node.getAllByAltText(/tile/gi).length).toBeGreaterThanOrEqual(1);
  });
});
