import React, { createContext, useCallback, useContext, useState } from 'react';
import { useYoutube } from '../utils/hooks';
import { storage } from '../utils/storage';

export const SearchContext = createContext();
SearchContext.displayName = 'Search';

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider = ({ children }) => {
  const { search, result, error, loading } = useYoutube();
  const [selectedVideo, setSelectedVideo] = useState(
    storage.get('selectedVideo') || null
  );

  const selectVideo = useCallback((video) => {
    storage.set('selectedVideo', video);
    setSelectedVideo(video);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        search,
        result,
        error,
        loading,
        selected: selectedVideo,
        select: selectVideo,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
