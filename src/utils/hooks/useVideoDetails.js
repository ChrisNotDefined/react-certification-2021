import { useEffect, useState } from 'react';
import { useSearchContext } from '../../providers/SearchContext';
import { queryDetails } from '../../providers/youtubeAPI';

const useVideoDetails = ({ videoId }) => {
  const { select } = useSearchContext();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDescription = async () => {
      setIsLoading(true);
      setError(null);
      const data = await queryDetails({ videoId });
      if (!data || data.error) {
        console.log('Error');
        setIsLoading(false);
        setError(data?.error || 'No data');
        return;
      }
      setIsLoading(false);
      select(data.items[0]);
    };

    fetchDescription();
  }, [videoId, select]);

  return { loading: isLoading, error };
};

export { useVideoDetails };
