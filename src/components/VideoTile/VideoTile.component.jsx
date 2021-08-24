import React from 'react';
import { useHistory } from 'react-router';
import { useSearchContext } from '../../providers/SearchContext';
import { useFavoritesContext } from '../../providers/FavoritesContext';
import { fromHtmlEntities } from '../../utils/strings';
import { FavoriteIcon } from '../../Icons';
import {
  CardRow,
  Container,
  FavBtn,
  Subtitle,
  Thumbnail,
  TileData,
  Title,
} from './VideoTile.styles';

export default function VideoTile({ video, onClick }) {
  const history = useHistory();
  const { select } = useSearchContext();
  const { addFav, removeFav, favs } = useFavoritesContext();
  const videoID = video.id.videoId || video.id.channelId || video.id;

  const handleClick = () => {
    history.push(`video=${videoID}`);
    select(video);
  };

  const handleFavClick = (evt) => {
    if (evt.stopPropagation) evt.stopPropagation();
    if (!favs[videoID]) addFav(video);
    else removeFav(videoID);
  };

  return (
    <Container key={videoID} onClick={onClick || handleClick}>
      <Thumbnail
        src={video.snippet.thumbnails.medium.url}
        alt={`${video.snippet.title} tile`}
      />
      <TileData>
        <Title>{fromHtmlEntities(video.snippet.title)}</Title>
        <CardRow>
          <Subtitle>{fromHtmlEntities(video.snippet.channelTitle)}</Subtitle>
          <FavBtn onClick={handleFavClick} type="button">
            <FavoriteIcon active={favs[videoID]} height="80%" />
          </FavBtn>
        </CardRow>
      </TileData>
    </Container>
  );
}
