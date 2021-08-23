import React from 'react';
import { useHistory } from 'react-router';
import { useSearchContext } from '../../providers/SearchContext';
import { fromHtmlEntities } from '../../utils/strings';
import { Container, Subtitle, Thumbnail, TileData, Title } from './VideoTile.styles';

export default function VideoTile({ video, onClick }) {
  const history = useHistory();
  const { select } = useSearchContext();

  const handleClick = () => {
    history.push(`video=${video.id.videoId || video.id.channelId || video.id}`);
    select(video);
  };

  return (
    <Container
      key={video.id.videoId || video.id.channelId || video.id}
      onClick={onClick || handleClick}
    >
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
