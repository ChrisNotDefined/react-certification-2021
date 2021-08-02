import React, { createContext, useReducer } from 'react';
import { storage } from '../utils/storage';

const initialValue = {
  isLoading: false,
  videos: [],
  pageTokens: {},
  selectedVideo: storage.get('selectedVideo'),
};

const LOAD_START = 'SEARCH/LOAD_START';
export const loadStart = () => ({ type: LOAD_START });

const NEW_DATA = 'SEARCH/NEW_DATA';
export const newData = (resposeData) => ({ type: NEW_DATA, payload: resposeData });

const LOAD_ENDED = 'SEARCH/LOAD_ENDED';
export const loadEnded = () => ({ type: LOAD_ENDED });

const SELECTED_VIDEO = 'SEARCH/SELECTED_VIDEO';
export const selectedVideo = (selectedVid) => ({
  type: SELECTED_VIDEO,
  payload: selectedVid,
});

const searchReducer = (state, action) => {
  if (action.type === LOAD_START) {
    return {
      ...state,
      isLoading: true,
    };
  }

  if (action.type === NEW_DATA) {
    return {
      ...state,
      videos: action.payload.items,
      pageTokens: {
        prev: action.payload.prevPageToken,
        next: action.payload.nextPageToken,
      },
    };
  }

  if (action.type === LOAD_ENDED) {
    return {
      ...state,
      isLoading: false,
    };
  }

  if (action.type === SELECTED_VIDEO) {
    storage.set('selectedVideo', action.payload);
    return {
      ...state,
      selectedVideo: action.payload,
    };
  }
};

export const SearchContext = createContext(initialValue, undefined);
SearchContext.displayName = 'Search';

export const SearchProvider = ({ children }) => {
  const [searchState, dispatch] = useReducer(searchReducer, initialValue);

  return (
    <SearchContext.Provider value={{ searchState, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
