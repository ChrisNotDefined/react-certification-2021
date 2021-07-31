import React, { createContext, useReducer } from 'react';

const initialValue = {
  isLoading: false,
  videos: [],
  pageTokens: {},
};

const LOAD_START = 'SEARCH/LOAD_START';
export const loadStart = () => ({ type: LOAD_START });

const NEW_DATA = 'SEARCH/NEW_DATA';
export const newData = (resposeData) => ({ type: NEW_DATA, payload: resposeData });

const LOAD_ENDED = 'SEARCH/LOAD_ENDED';
export const loadEnded = () => ({ type: LOAD_ENDED });

const searchReducer = (state = initialValue, action) => {
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
};

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchValues, dispatch] = useReducer(searchReducer, initialValue);

  return (
    <SearchContext.Provider value={{ searchValues, dispatch }}>
      {children}
    </SearchContext.Provider>
  );
};
