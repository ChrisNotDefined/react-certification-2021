import { useEffect, useState } from 'react';
import { queryRelated } from '../../providers/youtubeAPI';

const useRelatedVideos = ({ videoId }) => {
  const [loading, setLoading] = useState(false);
  const [related, setRelated] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRelatedVideos = () => {
      setLoading(true);
      setError(null);
      queryRelated({ videoId }).then((data) => {
        if (data?.error) {
          setError(data.error);
          setLoading(false);
        }

        if (data && !data.error) {
          const vids = data.items.filter((item) => !!item.snippet) || [];
          setRelated(vids);
          setLoading(false);
        }
      });
    };

    getRelatedVideos();
  }, [videoId]);

  return { related, loading, error };
};

export { useRelatedVideos };
