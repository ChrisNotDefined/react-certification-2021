import React, { useMemo } from 'react';
import { useHistory } from 'react-router';
import VideoCard from '../../components/VideoCard/VideoCard.component';

import { useAuthContext } from '../../providers/AuthContext';
import { useFavoritesContext } from '../../providers/FavoritesContext';
import { FavsList, FavsSection, UnauthMessage } from './Favorites.styles';

const FavoritesPage = () => {
  const { creds } = useAuthContext();
  const { favs } = useFavoritesContext();
  const favsArray = useMemo(() => Object.keys(favs).map((key) => favs[key]), [favs]);
  const history = useHistory();

  const lookFav = (videoID) => {
    history.push(`/favs=${videoID}`);
  };

  if (!creds)
    return <UnauthMessage>You must have an account to access this section</UnauthMessage>;

  return (
    <FavsSection>
      <h2>Favorites</h2>
      <FavsList>
        {favsArray.map((f) => (
          <VideoCard
            key={f.id}
            videoObj={f}
            onClick={() => {
              lookFav(f.id);
            }}
          />
        ))}
      </FavsList>
    </FavsSection>
  );
};

export default FavoritesPage;
