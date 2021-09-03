import React from 'react';
import { useHistory } from 'react-router';
import { useAuthContext } from '../../providers/AuthContext';
import { useFavoritesContext } from '../../providers/FavoritesContext';
import VideoCard from '../../components/VideoCard/VideoCard.component';
import { EmptyList, FavsList, FavsSection, UnauthMessage } from './Favorites.styles';
import { useSearchContext } from '../../providers/SearchContext';

const FavoritesPage = () => {
  const { creds } = useAuthContext();
  const { favs } = useFavoritesContext();
  const { select } = useSearchContext();
  const history = useHistory();

  const Favorites = () => {
    const list = Object.keys(favs).map((key) => {
      const fav = favs[key];

      const goToFavVideo = () => {
        history.push(`/favs=${key}`);
        select(fav);
      };

      return <VideoCard key={key} videoObj={fav} onClick={goToFavVideo} />;
    });

    if (list && list.length > 0) return list;
    return (
      <EmptyList>
        <h4>Your favorite videos will appear here</h4>
      </EmptyList>
    );
  };

  if (!creds)
    return <UnauthMessage>You must have an account to access this section</UnauthMessage>;

  return (
    <FavsSection>
      <h2>Favorites</h2>
      <FavsList>
        <Favorites />
      </FavsList>
    </FavsSection>
  );
};

export default FavoritesPage;
