import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
import { useYTSearch } from '../../utils/hooks/useYTSearch';

const VideoList = styled.section`
  padding: 1em 4em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1em;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 650px) {
    padding: 1em;
    grid-template-columns: 1fr;
  }
`;

const EmptySearch = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1;
  color: gray;

  & p {
    font-size: 2rem;
  }

  & h2 {
    font-size: 3rem;
  }
`;

function HomePage() {
  const { videos } = useYTSearch();

  const SearchedVideos = () => {
    return videos.map((v) => {
      return <VideoCard key={v.id.videoId || v.id.channelId} videoObj={v} />;
    });
  };

  if (!videos || videos.length === 0) {
    return (
      <EmptySearch>
        <h2>Welcome</h2>
        <p>Use the Search bar to start looking for videos</p>
      </EmptySearch>
    );
  }

  return (
    <VideoList>
      <SearchedVideos />
    </VideoList>
  );
}

export default HomePage;
