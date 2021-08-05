import { useEffect, useState } from 'react';

const getMockedVideos = async () => {
  try {
    const res = await fetch('mocks/youtube-videos-mock.json');
    const data = await res.json();
    return data;
  } catch (err) {
    return { error: err };
  }
};

const useMockedVideos = () => {
  const [videoList, setVideoList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await getMockedVideos();
        if (!data || data.error) {
          throw new Error(data?.error || 'No data fetched');
        }
        setVideoList(data);
      } catch (err) {
        setError(err);
      }
    };
    fetchVideos();
  }, []);

  return { videoList, error };
};

export { useMockedVideos, getMockedVideos };
