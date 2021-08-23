import React from 'react';
import { useHistory } from 'react-router';
import { useSearchContext } from '../../providers/SearchContext';
import { useMediaQuery } from '../../utils/hooks';
import { fromHtmlEntities } from '../../utils/strings';
import {
  CardBoard,
  CardContent,
  CardImage,
  CardSubtitle,
  CardTitle,
} from './VideoCard.styles';

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

  if (v === null) return <div>There is no info to render</div>;

  return (
    <CardBoard onClick={onClick || navigateToVideo}>
      <CardImage src={decideImg()} alt={`${v.title} thumbnail`} />
      <CardTitle>{v.title}</CardTitle>
      <CardSubtitle>{v.channelTitle}</CardSubtitle>
      <CardContent>{v.description}</CardContent>
    </CardBoard>
  );
}
