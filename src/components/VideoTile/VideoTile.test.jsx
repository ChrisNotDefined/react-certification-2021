import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { find } from 'styled-components/test-utils';
import VideoTile from './VideoTile.component';
import { SearchProvider } from '../../providers/SearchContext';
import ytMock from '../../mocks/youtube-videos-mock.json';
import { Container } from './VideoTile.styles';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

describe('Video Tile Component', () => {
  let element;

  const videoMock = ytMock.items[4];

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
