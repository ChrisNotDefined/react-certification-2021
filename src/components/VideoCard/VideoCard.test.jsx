import { render } from '@testing-library/react';
import React from 'react';
import VideoCard from './VideoCard.component';

describe('VideoCard component', () => {
  it('Loads the video', () => {
    const mockVideo = {
      thumbnail: 'https://i.ytimg.com/vi/8bz9R61oY5o/mqdefault.jpg',
      title: 'Silicon Valley en México',
      channelTitle: 'Azteca Noticias',
      description:
        'Empresas de Silicon Valley buscan establecerse en México por el gran talento que hay en nuestro país. Es una investigación de Roberto Domínguez.',
    };

    const wrapper = render(<VideoCard videoObj={mockVideo} />);

    wrapper.getByText(mockVideo.title);
    wrapper.getByText(mockVideo.channelTitle);
    wrapper.getByText(mockVideo.description);
    expect(wrapper.container.querySelector('img').src).toBe(mockVideo.thumbnail);
  });
});
