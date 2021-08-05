import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useSearchContext } from '../../providers/SearchContext';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';
import { fromHtmlEntities } from '../../utils/strings';

const CardBoard = styled.div`
  background-color: white;
  box-shadow: 0 1px 4px 1px #0003;
  margin-bottom: 1em;
  padding: 1em;
  min-width: 30ch;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background-color 200ms;

  :hover {
    background-color: #eee;
  }
`;

const CardImage = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: solid 4px var(--primary);
`;

const CardContent = styled.p`
  color: gray;
  font-size: 0.8rem;
  text-overflow: fade;
  max-height: 3em;
  overflow-y: hidden;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const CardSubtitle = styled.div`
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

const getDataForCard = (video) => {
  return (
    (video && {
      id: video.id.videoId || video.id.channelId,
      channelTitle: fromHtmlEntities(video.snippet.channelTitle),
      description: fromHtmlEntities(video.snippet.description),
      publishedAt: video.snippet.publishedAt,
      thumbnails: video.snippet.thumbnails,
      title: fromHtmlEntities(video.snippet.title),
    }) ||
    null
  );
};

export default function VideoCard({ videoObj }) {
  const gt700px = useMediaQuery('(min-width: 700px)');
  const gt500px = useMediaQuery('(min-width: 500px)');
  const history = useHistory();
  // const { dispatch } = useContext(SearchContext);
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
    // dispatch(videoSelected(videoObj));
    select(videoObj);
  };

  if (v === null) return <div>There is no info to render</div>;

  return (
    <CardBoard onClick={navigateToVideo}>
      <CardImage src={decideImg()} alt={`${v.title} thumbnail`} />
      <CardTitle>{v.title}</CardTitle>
      <CardSubtitle>{v.channelTitle}</CardSubtitle>
      <CardContent>{v.description}</CardContent>
    </CardBoard>
  );
}
