import { act, cleanup, render } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { SearchProvider } from '../../providers/SearchContext';
import * as hooks from '../../providers/SearchContext';
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

jest.mock('../../utils/hooks/useRelatedVideos.js', () => ({
  useRelatedVideos: () => ({ related: [...mockVideos.items] }),
}));

describe('Video Page', () => {
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
    act(() => {
      const node = renderNode();
      const iframe = node.container.querySelector('iframe');
      expect(iframe).not.toBeUndefined();
    });
  });

  it('Renders the video list', () => {
    act(() => {
      hooks.useSearchContext = jest.fn(() => ({
        result: { items: mockVideos.items },
        selected: mockVideos.items[0],
        search: jest.fn(),
      }));

      const node = renderNode();
      expect(node.getAllByAltText(/tile/gi).length).toBeGreaterThanOrEqual(1);
    });
  });
});
