import React from 'react';
import { render } from '@testing-library/react';
import ReactRouter, { MemoryRouter } from 'react-router';
import ytMock from '../../mocks/youtube-videos-mock.json';
import * as SearchCtx from '../../providers/SearchContext';
import * as FavsCtx from '../../providers/FavoritesContext';
import FavVideoPage from './FavVideo.page';

jest.mock('../../providers/AuthContext', () => ({
  useAuthContext: () => ({ creds: {} }),
}));

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('../../utils/hooks/useVideoDetails', () => ({
  useVideoDetails: () => ({
    loading: false,
    error: null,
  }),
}));

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

const videoToMock = ytMock.items[0];

describe('Favorite Video Page', () => {
  const renderPage = () =>
    render(
      <MemoryRouter>
        <FavVideoPage />
      </MemoryRouter>
    );

  it('Renders the page correctly', () => {
    jest.spyOn(ReactRouter, 'useParams').mockImplementation(() => {
      return { videoId: videoToMock.id.videoId };
    });

    jest.spyOn(SearchCtx, 'useSearchContext').mockImplementation(() => {
      return {
        selected: videoToMock,
      };
    });

    jest.spyOn(FavsCtx, 'useFavoritesContext').mockImplementation(() => {
      return {
        favs: { [videoToMock.id.videoId]: videoToMock },
      };
    });

    const node = renderPage();
    node.getByText(videoToMock.snippet.title);
  });
});
