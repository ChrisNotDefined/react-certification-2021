import { useEffect, useState } from 'react';

const useMockedVideos = (dataTransformer) => {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    console.log('Calling mock');
    fetch('mocks/youtube-videos-mock.json')
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        const videos = data.items.map((vid) =>
          dataTransformer ? dataTransformer(vid) : vid
        );
        setVideoList(videos);
      });
  }, [dataTransformer]);

  return { videoList };
};

export { useMockedVideos };
