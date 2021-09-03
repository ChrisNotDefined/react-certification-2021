import React from 'react';
import { FavoriteIcon } from '../../Icons';
import { useAuthContext } from '../../providers/AuthContext';
import { useFavoritesContext } from '../../providers/FavoritesContext';
import { fromHtmlEntities } from '../../utils/strings';
import {
  ChannelTitle,
  Container,
  FavButton,
  Row,
  VideoDesc,
  VideoTitle,
} from './VideoInfo.styles';

export default function VideoInfo({ selectedVideo }) {
  const { creds } = useAuthContext();
  const { favs, addFav, removeFav } = useFavoritesContext();
  const { id } = selectedVideo;
  const isInFavorites = !!favs[id];

  const handleFavClick = () => {
    if (!isInFavorites) {
      addFav(selectedVideo);
    } else {
      removeFav(id);
    }
  };

  return (
    <Container>
      <Row>
        <VideoTitle>{fromHtmlEntities(selectedVideo.snippet.title)}</VideoTitle>
        {creds && (
          <FavButton onClick={handleFavClick}>
            <FavoriteIcon width="2em" active={isInFavorites} /> Favorites
          </FavButton>
        )}
      </Row>
      <ChannelTitle>{fromHtmlEntities(selectedVideo.snippet.channelTitle)}</ChannelTitle>
      <VideoDesc>{fromHtmlEntities(selectedVideo.snippet.description)}</VideoDesc>
    </Container>
  );
}
