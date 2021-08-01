import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useMediaQuery } from '../../utils/hooks/useMediaQuery';

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

export default function VideoCard({ videoObj }) {
  const gt700px = useMediaQuery('(min-width: 700px)');
  const gt500px = useMediaQuery('(min-width: 500px)');
  const history = useHistory();

  const decideImg = () => {
    if (!videoObj) return null;
    if (videoObj.thumbnail) return videoObj.thumbnail;

    const { thumbnails } = videoObj;

    if (thumbnails) {
      if (gt700px)
        return thumbnails.high.url || thumbnails.medium.url || thumbnails.default.url;

      if (gt500px) return thumbnails.medium.url || thumbnails.default.url;

      return thumbnails.default.url;
    }

    return null;
  };

  const navigateToVideo = () => {
    history.push(`/video=${videoObj.id}`);
  };

  return (
    <CardBoard onClick={navigateToVideo}>
      <CardImage src={decideImg()} alt={`${videoObj.title} thumbnail`} />
      <CardTitle>{videoObj.title}</CardTitle>
      <CardSubtitle>{videoObj.channelTitle}</CardSubtitle>
      <CardContent>{videoObj.description}</CardContent>
    </CardBoard>
  );
}
