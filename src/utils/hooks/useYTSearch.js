import { useContext, useState } from 'react';
import {
  loadEnded,
  loadStart,
  SearchContext,
  newData,
} from '../../providers/SearchContext';
// import { queryVideos } from '../../providers/youtubeAPI';

const useYTSearch = () => {
  const [error, setError] = useState(null);

  const { searchValues, dispatch } = useContext(SearchContext);

  const fetchVideos = async (query) => {
    dispatch(loadStart());
    try {
      const fetchedData = {
        items: [...query],
        prevPageToken: 'prev',
        nextPageToken: 'next',
      };
      // const fetchedData = queryVideos({ keyword: query });
      dispatch(newData(fetchedData));
    } catch (err) {
      setError(err);
    } finally {
      dispatch(loadEnded());
    }
  };

  return {
    ...searchValues,
    error,
    fetchVideos,
  };
};

export { useYTSearch };
