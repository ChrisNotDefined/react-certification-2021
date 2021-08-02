import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';
import VideoInfo from '../../components/VideoInfo';
import VideoTile from '../../components/VideoTile/VideoTile.component';
import { useYTSearch } from '../../utils/hooks/useYTSearch';
import { storage } from '../../utils/storage';

const VideoGrid = styled.section`
  display: grid;
  grid-template-columns: 2.5fr 1fr;
  min-height: calc(100vh - 64px);
  align-items: stretch;

  @media (max-width: 1280px) {
    grid-template-columns: 2fr 1fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const VideoSection = styled.section`
  background-color: var(--primary);
  padding: 1em;
`;

const ListSection = styled.section`
  background-color: var(--accent);

  &::-webkit-scrollbar {
    width: 1ch;
    background-color: var(--accent-brighter);
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid var(--accent-brighter);
    background-color: var(--primary);

    :hover {
      background-color: var(--primary-brighter);
    }
  }

  @media (min-width: 850px) {
    max-height: calc(100vh - 64px);
    overflow-y: auto;
  }
`;

const VideoFrame = styled.iframe`
  background-color: black;
  /* min-height: 300px; */
  aspect-ratio: 16 / 9;
  border: none;
`;

export default function VideoPage() {
  const { videoId } = useParams();

  const { videos, selectedVideo, fetchVideos } = useYTSearch();

  useEffect(() => {
    if (videos?.length === 0) {
      console.log('Videopage useEffct');
      const lastSearch = storage.get('search')?.last || 'wizeline';
      fetchVideos(lastSearch);
    }
  }, [videos.length, fetchVideos]);

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
        {selectedVideo && <VideoInfo selectedVideo={selectedVideo} />}
      </VideoSection>
      <ListSection>{videos?.length > 0 && <ShowRelatedVideos />}</ListSection>
    </VideoGrid>
  );
}
