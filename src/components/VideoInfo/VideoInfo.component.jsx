import React, { useState } from 'react';
import { FavoriteIcon } from '../../Icons';
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
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = () => {
    setIsFav((prev) => !prev);
  };

  return (
    <Container>
      <Row>
        <VideoTitle>{fromHtmlEntities(selectedVideo.snippet.title)}</VideoTitle>
        <FavButton onClick={handleFavClick}>
          <FavoriteIcon width="2em" active={isFav} /> Favorites
        </FavButton>
      </Row>
      <ChannelTitle>{fromHtmlEntities(selectedVideo.snippet.channelTitle)}</ChannelTitle>
      <VideoDesc>{fromHtmlEntities(selectedVideo.snippet.description)}</VideoDesc>
    </Container>
  );
}
