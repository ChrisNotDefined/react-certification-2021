import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { find } from 'styled-components/test-utils';
import VideoTile, { Container } from './VideoTile.component';
import { SearchProvider } from '../../providers/SearchContext';

describe('Video Tile Component', () => {
  let element;

  const videoMock = {
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

  beforeAll(() => {
    element = render(
      <BrowserRouter>
        <SearchProvider>
          <VideoTile video={videoMock} />
        </SearchProvider>
      </BrowserRouter>
    );
  });

  it('Redirects to the selected video', () => {
    const containerEl = find(element.container, Container);
    expect(containerEl).not.toBeNull();

    fireEvent.click(containerEl);
  });
});
