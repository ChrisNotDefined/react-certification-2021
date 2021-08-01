import React, { useState } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import VideoTile from '../../components/VideoTile/VideoTile.component';

import { FavoriteIcon } from '../../Icons';
import { useMockedVideos } from '../../utils/hooks/useMockedVideos';
// import { useYTSearch } from '../../utils/hooks/useYTSearch';
// import { storage } from '../../utils/storage';

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

const ListSection = styled.section`
  background-color: var(--accent);

  @media (min-width: 700px) {
    height: 100%;
    overflow-y: auto;
  }
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
  const { videoId } = useParams();

  const { videoList: videos } = useMockedVideos();
  // const { videos, fetchVideos } = useYTSearch();

  // useEffect(() => {
  //   const lastSearch = storage.get('search').last;
  //   fetchVideos(lastSearch);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  const handleFavClick = () => {
    setIsFav((prev) => !prev);
  };

  const ShowRelatedVideos = () => {
    return videos.map((vid) => <VideoTile key={vid.id.videoId} video={vid} />);
  };

  return (
    <VideoGrid>
      <VideoSection>
        <VideoFrame
          title="video"
          width="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
        <VideoInfo>
          <Row>
            <h2>Video Title</h2>
            <FavButton onClick={handleFavClick}>
              <FavoriteIcon width="2em" active={isFav} /> Favorites
            </FavButton>
          </Row>
          <h4>Channel Name</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat laboriosam,
            soluta fuga ab neque quod nostrum blanditiis a cum explicabo.
          </p>
        </VideoInfo>
      </VideoSection>
      <ListSection>{videos?.length > 0 && <ShowRelatedVideos />}</ListSection>
    </VideoGrid>
  );
}
