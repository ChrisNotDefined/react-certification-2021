import React, { useState } from 'react';
import styled from 'styled-components';
import { FavoriteIcon } from '../../Icons';

const VideoGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: calc(100vh - 64px);

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const VideoSection = styled.section`
  background-color: var(--primary);
`;

const RecomendedSection = styled.section`
  background-color: var(--accent);
`;

const VideoFrame = styled.iframe`
  background-color: black;
  min-height: 300px;
  aspect-ratio: 16 / 9;
  border: none;
`;

const VideoInfo = styled.div`
  margin: 0 1em;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FavButton = styled.button`
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

export default function VideoDetails() {
  const [isFav, setIsFav] = useState(false);

  const handleFavClick = () => {
    setIsFav((prev) => !prev);
  };

  return (
    <VideoGrid>
      <VideoSection>
        <VideoFrame
          title="video"
          width="100%"
          src="https://www.youtube.com/embed/pVYpGSgtG_I"
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <VideoInfo>
          <Row>
            <h2>Video Title</h2>
            <FavButton onClick={handleFavClick}>
              <FavoriteIcon width="2em" active={isFav} /> Agregar a favoritos
            </FavButton>
          </Row>
          <h4>Channel Name</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam,
            soluta fuga ab neque quod nostrum blanditiis a cum explicabo.
          </p>
        </VideoInfo>
      </VideoSection>
      <RecomendedSection>Recomendations</RecomendedSection>
    </VideoGrid>
  );
}
