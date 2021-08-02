import { useCallback, useEffect, useState } from 'react';

const useMockedVideos = () => {
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(null);

  const callToApi = useCallback(async () => {
    console.log('useMock useEffect');
    try {
      const res = await fetch('mocks/youtube-videos-mock.json');
      const data = await res.json();
      setVideoList(data);
    } catch (err) {
      setError(err);
    }
  }, []);

  useEffect(() => {
    callToApi();
  }, [callToApi]);

  return { videoList, error };
};

export { useMockedVideos };
