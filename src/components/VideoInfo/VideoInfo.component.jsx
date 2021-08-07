import React, { useState } from 'react';
import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';
import { FavoriteIcon } from '../../Icons';
import { fromHtmlEntities } from '../../utils/strings';

const Container = styled.div`
  color: ${decideTheme('white', 'var(--textDark)')};
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;

const VideoTitle = styled.h2`
  margin: 0;
`;

const ChannelTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  border-top: solid 3px;
  padding-top: 0.5em;
`;

const VideoDesc = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

const FavButton = styled.button`
  color: ${decideTheme('white', 'var(--textDark)')};
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  width: max-content;
  background-color: transparent;
  align-items: center;
  display: flex;
  padding: 1em;
  gap: 1em;
  transition: background-color 200ms;

  :hover {
    background-color: #fff3;
  }
`;

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
