import { useEffect, useState } from 'react';
import { queryVideos } from '../../providers/youtubeAPI';
import { getMockedVideos } from './useMockedVideos';

const useYoutube = () => {
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      if (!query || query === '') {
        return;
      }
      try {
        setLoading(true);
        setError(null);

        const fetchedData =
          (await queryVideos({ keyword: query })) || (await getMockedVideos());

        if (!fetchedData || fetchedData.error) {
          throw new Error(fetchedData?.error || 'No data fetched');
        }

        setResult(fetchedData);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
        setResult(null);
      }
    };

    fetchVideos();
  }, [query]);

  const search = ({ keyword }) => {
    setQuery(keyword);
  };

  return {
    error,
    loading,
    result,
    search,
  };
};

export { useYoutube };
