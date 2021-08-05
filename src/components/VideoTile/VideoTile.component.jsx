import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { useSearchContext } from '../../providers/SearchContext';
import { fromHtmlEntities } from '../../utils/strings';

export const Container = styled.div`
  background-color: white;
  box-shadow: 0 1px 2px #0002;
  border-radius: 5px;
  height: 6em;
  margin: 0.3em 0.2em;
  padding: 0.5em;
  overflow-y: hidden;
  display: flex;
  gap: 0.5em;
  cursor: pointer;
  transition: background-color 200ms;

  @media (max-width: 850px) {
    height: 8em;
  }

  :hover {
    background-color: #eee;
  }
`;

const Thumbnail = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 5px;
`;

const TileData = styled.div`
  width: 100%;
`;

const Title = styled.span`
  border-bottom: solid 2px var(--primary);
  line-height: 1.1em;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 2.2em;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: bold;
`;

const Subtitle = styled.p`
  margin: 0.5em 0;
  font-size: 0.7rem;
  text-align: end;
`;

export default function VideoTile({ video }) {
  const history = useHistory();
  const { select } = useSearchContext();

  const handleClick = () => {
    history.push(`video=${video.id.videoId}`);
    select(video);
  };

  return (
    <Container key={video.id.videoId || video.id.channelId} onClick={handleClick}>
      <Thumbnail
        src={video.snippet.thumbnails.medium.url}
        alt={`${video.snippet.title} tile`}
      />
      <TileData>
        <Title>{fromHtmlEntities(video.snippet.title)}</Title>
        <Subtitle>{fromHtmlEntities(video.snippet.channelTitle)}</Subtitle>
      </TileData>
    </Container>
  );
}
