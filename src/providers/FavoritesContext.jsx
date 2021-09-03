import React, { createContext, useContext } from 'react';
import { useFavorites } from '../utils/hooks/useFavorites';

const FavoritesContext = createContext({
  // eslint-disable-next-line no-unused-vars
  addFav: (video) => {},
  // eslint-disable-next-line no-unused-vars
  removeFav: (videoID) => {},
  favs: {},
});

FavoritesContext.displayName = 'Favorites';

export const useFavoritesContext = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const { addFav, removeFav, favs } = useFavorites();

  return (
    <FavoritesContext.Provider value={{ addFav, removeFav, favs }}>
      {children}
    </FavoritesContext.Provider>
  );
};
