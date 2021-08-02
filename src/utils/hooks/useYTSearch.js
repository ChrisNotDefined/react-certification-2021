import { useContext, useMemo, useState } from 'react';
import {
  loadEnded,
  loadStart,
  SearchContext,
  newData,
} from '../../providers/SearchContext';
import { queryVideos } from '../../providers/youtubeAPI';
import { useMockedVideos } from './useMockedVideos';

const useYTSearch = () => {
  const [error, setError] = useState(null);

  const { searchState, dispatch } = useContext(SearchContext);

  const { videoList } = useMockedVideos();

  const fetchVideos = useMemo(
    () => async (query) => {
      if (!query) {
        console.log('No query');
        return;
      }
      dispatch(loadStart());
      try {
        const fetchedData = (await queryVideos({ keyword: query })) || videoList;
        console.log('Called api');
        if (fetchedData !== null)
          dispatch(newData(!fetchedData.items ? { items: fetchedData } : fetchedData));
        else {
          console.log('retrined null');
        }
      } catch (err) {
        setError(err);
        console.error('Use YT Search', err);
      } finally {
        dispatch(loadEnded());
      }
    },
    [dispatch, videoList]
  );

  return {
    ...searchState,
    error,
    fetchVideos,
  };
};

export { useYTSearch };
