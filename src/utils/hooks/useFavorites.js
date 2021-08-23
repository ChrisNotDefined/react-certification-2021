import { useCallback, useReducer } from 'react';
import { storage } from '../storage';

const ACTIONS = {
  ADD: 'FAVS/ADD',
  REMOVE: 'FAVS/REMOVE',
  UPDATE: 'FAVS/UPDATE',
};

const favsReducer = (state, [type, payload]) => {
  if (type === ACTIONS.ADD) {
    const identifier = payload?.snippet?.id?.videoId || payload.id;
    const newState = {
      ...state,
      [identifier]: payload,
    };
    storage.set('favorites', newState);
    return newState;
  }

  if (type === ACTIONS.REMOVE) {
    const newState = { ...state };
    delete newState[payload];
    storage.set('favorites', newState);
    return newState;
  }
};

const useFavorites = () => {
  const [favs, dispatch] = useReducer(favsReducer, storage.get('favorites') || {});

  const addFav = useCallback((video) => {
    dispatch([ACTIONS.ADD, video]);
  }, []);

  const removeFav = useCallback((videoID) => {
    dispatch([ACTIONS.REMOVE, videoID]);
  }, []);

  return { removeFav, addFav, favs };
};

export { useFavorites };
