import React from 'react';
import { render } from '@testing-library/react';
import VideoInfo from './VideoInfo.component';
import ytMock from '../../mocks/youtube-videos-mock.json';

jest.mock('../../providers/firebaseConfig.js', () => {
  return { firebaseApp: {} };
});

jest.mock('firebase/auth', () => ({
  onAuthStateChanged: () => () => {},
}));

jest.mock('../../providers/AuthContext', () => ({
  useAuthContext: () => ({ creds: 'User Data' }),
}));

describe('Video Info Component', () => {
  it('Shows the description of the video', () => {
    const mockVideo = ytMock.items[2];
    const videoNode = render(<VideoInfo selectedVideo={mockVideo} />);
    videoNode.getAllByText(/wizeline/i);
  });
});
