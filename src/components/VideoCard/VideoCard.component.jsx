import React from 'react';
import { useHistory } from 'react-router';
import { useSearchContext } from '../../providers/SearchContext';
import { useFavoritesContext } from '../../providers/FavoritesContext';
import { useMediaQuery } from '../../utils/hooks';
import { fromHtmlEntities } from '../../utils/strings';
import { FavoriteIcon } from '../../Icons';
import {
  CardBoard,
  CardContent,
  CardImage,
  CardSubtitle,
  CardTitle,
  RoundButton,
} from './VideoCard.styles';
import { useAuthContext } from '../../providers/AuthContext';

const getDataForCard = (video) => {
  return (
    (video && {
      id: video.id.videoId || video.id.channelId || video.id,
      channelTitle: fromHtmlEntities(video.snippet.channelTitle),
      description: fromHtmlEntities(video.snippet.description),
      publishedAt: video.snippet.publishedAt,
      thumbnails: video.snippet.thumbnails,
      title: fromHtmlEntities(video.snippet.title),
    }) ||
    null
  );
};

export default function VideoCard({ videoObj, onClick }) {
  const gt700px = useMediaQuery('(min-width: 700px)');
  const gt500px = useMediaQuery('(min-width: 500px)');
  const history = useHistory();
  const { favs, addFav, removeFav } = useFavoritesContext();
  const { creds } = useAuthContext();
  const { select } = useSearchContext();
  const v = getDataForCard(videoObj);

  const decideImg = () => {
    const { thumbnails } = v;
    if (thumbnails) {
      if (gt700px)
        return thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;
      if (gt500px) return thumbnails.medium.url || thumbnails.default.url;
      return thumbnails.default.url;
    }
    return null;
  };

  const navigateToVideo = () => {
    history.push(`/video=${v.id}`);
    select(videoObj);
  };

  const favoriteClick = (evt) => {
    if (evt.stopPropagation) evt.stopPropagation();
    if (favs[v.id]) {
      removeFav(v.id);
      return;
    }
    addFav(videoObj);
  };

  if (v === null) return <div>There is no info to render</div>;

  return (
    <CardBoard onClick={onClick || navigateToVideo}>
      <CardImage src={decideImg()} alt={`${v.title} thumbnail`} />
      <CardTitle>{v.title}</CardTitle>
      <CardSubtitle>{v.channelTitle}</CardSubtitle>
      <CardContent>{v.description}</CardContent>
      {creds && (
        <RoundButton onClick={favoriteClick}>
          <FavoriteIcon active={!!favs[v.id]} width="2em" />
        </RoundButton>
      )}
    </CardBoard>
  );
}
