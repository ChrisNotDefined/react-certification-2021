import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ytMock from '../../mocks/youtube-videos-mock.json';
import * as AuthCtx from '../../providers/AuthContext';
import * as FavsCtx from '../../providers/FavoritesContext';
import FavoritesPage from './Favorites.page';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Favorites List', () => {
  const renderNode = () => render(<FavoritesPage />);

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

  it('Request the user to be loged in if there has been no authentication', () => {
    const node = renderNode();
    node.getByText(/you must have an account/i);
  });

  it('Suggest to add videos when there are not favs saved', () => {
    jest.spyOn(AuthCtx, 'useAuthContext').mockImplementation(() => ({
      creds: {
        email: 'chris@email.com',
        uid: '122345',
      },
    }));

    const node = renderNode();
    node.getByText(/Your favorite videos will appear here/i);
  });

  it("Shows the favorites once the're are provided", () => {
    const mockVideo = ytMock.items[0];

    jest.spyOn(FavsCtx, 'useFavoritesContext').mockImplementation(() => ({
      favs: {
        [mockVideo.id.videoId]: mockVideo,
      },
    }));

    const node = renderNode();
    node.getByText(mockVideo.snippet.title);
  });
});
