import React from 'react';
import VideoCard from '../../components/VideoCard';
import { SpinnerIcon } from '../../Icons';
import { useSearchContext } from '../../providers/SearchContext';
import { EmptySearch, VideoList } from './Home.styles';

function HomePage() {
  const { result, loading } = useSearchContext();
  const videos = result?.items;

  const SearchedVideos = () => {
    return videos.map((v) => {
      return <VideoCard key={v.id.videoId || v.id.channelId} videoObj={v} />;
    });
  };

  if (loading) {
    return (
      <EmptySearch>
        <SpinnerIcon
          width="3em"
          primary="var(--primary)"
          accent="var(--accent-brighter)"
          animate
        />
        <p>Loading...</p>
      </EmptySearch>
    );
  }

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
