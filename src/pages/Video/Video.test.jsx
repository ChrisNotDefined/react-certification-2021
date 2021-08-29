import { render } from '@testing-library/react';
import React from 'react';
import ReactRouter, { MemoryRouter } from 'react-router';
import { SearchProvider } from '../../providers/SearchContext';
import * as SearchCtx from '../../providers/SearchContext';
import * as YTAPI from '../../providers/youtubeAPI';
import mockVideos from '../../mocks/youtube-videos-mock.json';
import VideoPage from './Video.page';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

jest.mock('../../providers/AuthContext', () => ({
  useAuthContext: () => ({ creds: 'User Data' }),
}));

describe('Video Page', () => {
  const relatedPromise = new Promise((resolve) => {
    resolve(mockVideos);
  });
  const detailsPromise = new Promise((resolve) => {
    resolve(mockVideos);
  });

  beforeAll(() => {
    jest.spyOn(ReactRouter, 'useParams').mockImplementation(() => {
      return { videoId: mockVideos.items[0].id.videoId };
    });

    jest.spyOn(YTAPI, 'queryRelated').mockImplementation(() => relatedPromise);

    jest.spyOn(YTAPI, 'queryDetails').mockImplementation(() => detailsPromise);
  });

  const renderNode = () =>
    render(
      <SearchProvider>
        <MemoryRouter>
          <VideoPage />
        </MemoryRouter>
      </SearchProvider>
    );

  it('Renders the video section', async () => {
    const node = renderNode();
    const iframe = node.container.querySelector('iframe');

    setTimeout(() => {
      expect(iframe).not.toBeUndefined();
    }, 100);
  });

  it('Renders the video list', async () => {
    SearchCtx.useSearchContext = jest.fn(() => ({
      result: mockVideos,
      selected: mockVideos.items[0],
      select: jest.fn(),
    }));

    const node = renderNode();

    setTimeout(() => {
      expect(node.getAllByAltText(/tile/gi).length).toBeGreaterThanOrEqual(1);
    }, 100);
  });

  it('Shows error when there is no response', async () => {
    const prom = Promise.resolve(null);
    jest.spyOn(YTAPI, 'queryDetails').mockImplementationOnce(() => prom);

    const node = renderNode();
    setTimeout(() => {
      node.getByText(/something went wrong/i);
    }, 100);
  });

  it('Shows error if fetch return an error', () => {
    const prom = Promise.resolve({ error: 'Some error' });
    jest.spyOn(YTAPI, 'queryDetails').mockImplementationOnce(() => prom);

    const node = renderNode();

    setTimeout(() => {
      node.getByText(/something went wrong/i);
    }, 100);
  });
});
