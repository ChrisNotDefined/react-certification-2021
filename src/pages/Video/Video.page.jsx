import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import VideoInfo from '../../components/VideoInfo';
import VideoTile from '../../components/VideoTile/VideoTile.component';
import { decideTheme } from '../../globalStyles';
import { useSearchContext } from '../../providers/SearchContext';
import { storage } from '../../utils/storage';

const VideoGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: calc(100vh - 64px);

  @media (max-width: 1080px) {
    grid-template-columns: 2fr 1.5fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const VideoSection = styled.section`
  background-color: ${decideTheme('var(--primary)', 'var(--paperDark)')};
  padding: 1em;
  display: flex;
  flex-direction: column;
  transition: background-color 200ms;
`;

const ListSection = styled.section`
  background-color: ${decideTheme('var(--accent)', 'var(--baseDark)')};

  &::-webkit-scrollbar {
    width: 1ch;
    background-color: ${decideTheme('var(--accent-brighter)', 'var(--paperDark)')};
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid ${decideTheme('var(--accent-brighter)', 'var(--paperDark)')};
    background-color: var(--primary);

    :hover {
      background-color: var(--primary-brighter);
    }
  }

  @media (min-width: 850px) {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }
`;

const VideoFrame = styled.iframe`
  background-color: black;
  max-height: max(30vw, 50vh);
  aspect-ratio: 16 / 9;
  align-self: center;
  border: none;
`;

export default function VideoPage() {
  const { videoId } = useParams();

  const { search, selected, result } = useSearchContext();
  const videos = result?.items;

  useEffect(() => {
    if (!videos || videos?.length === 0) {
      console.log('Videopage useEffct');
      const lastSearch = storage.get('search')?.last || 'wizeline';
      search({ keyword: lastSearch });
    }
  }, [videos, search]);

  const ShowRelatedVideos = () => {
    return videos.map((vid) => (
      <VideoTile key={vid.id.videoId || vid.id.channelId} video={vid} />
    ));
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
        {selected && <VideoInfo selectedVideo={selected} />}
      </VideoSection>
      <ListSection>{videos?.length > 0 && <ShowRelatedVideos />}</ListSection>
    </VideoGrid>
  );
}
