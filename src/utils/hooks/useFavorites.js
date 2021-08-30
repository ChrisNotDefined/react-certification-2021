import { useEffect, useReducer } from 'react';
import { useAuthContext } from '../../providers/AuthContext';
import {
  addToFavorites,
  deleteFromFavorites,
  listenToFavorites,
} from '../../providers/firebaseFirestore';
import { storage } from '../storage';

const ACTIONS = {
  ADD: 'FAVS/ADD',
  REMOVE: 'FAVS/REMOVE',
  UPDATE: 'FAVS/UPDATE',
  CLEAR: 'FAVS/CLEAR',
};

const favsReducer = (state, [type, payload]) => {
  if (type === ACTIONS.ADD) {
    const identifier = payload.video?.id?.videoId || payload.video.id;
    const newState = {
      ...state,
      [identifier]: payload.video,
    };
    addToFavorites(payload.video, payload.userID);
    return newState;
  }

  if (type === ACTIONS.REMOVE) {
    const newState = { ...state };
    delete newState[payload.videoID];
    deleteFromFavorites(payload.videoID, payload.userID);
    return newState;
  }

  if (type === ACTIONS.UPDATE) {
    storage.set('favorites', payload || {});
    return payload;
  }

  if (type === ACTIONS.CLEAR) {
    storage.remove('favorites');
    return {};
  }
};

const useFavorites = () => {
  const [favs, dispatch] = useReducer(favsReducer, storage.get('favorites') || {});
  const { creds } = useAuthContext();
  const id = creds?.uid;

  useEffect(() => {
    if (!id) {
      dispatch([ACTIONS.CLEAR]);
      return;
    }

    const onSnapshot = (docData) => {
      dispatch([ACTIONS.UPDATE, docData || {}]);
    };

    const unsubs = listenToFavorites(id, onSnapshot);

    return () => {
      unsubs();
    };
  }, [id]);

  const addFav = (video) => {
    dispatch([ACTIONS.ADD, { video, userID: id }]);
  };

  const removeFav = (videoID) => {
    dispatch([ACTIONS.REMOVE, { videoID, userID: id }]);
  };

  return { removeFav, addFav, favs };
};

export { useFavorites };
