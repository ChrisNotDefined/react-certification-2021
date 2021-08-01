import React from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
import { useMockedVideos } from '../../utils/hooks/useMockedVideos';
import { useYTSearch } from '../../utils/hooks/useYTSearch';
import { fromHtmlEntities } from '../../utils/strings';

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

const getDataForCard = (video) => {
  return {
    id: video.id.videoId || video.id.channelId,
    channelTitle: fromHtmlEntities(video.snippet.channelTitle),
    description: fromHtmlEntities(video.snippet.description),
    publishedAt: video.snippet.publishedAt,
    thumbnails: video.snippet.thumbnails,
    title: fromHtmlEntities(video.snippet.title),
  };
};

function HomePage() {
  const { videoList } = useMockedVideos(getDataForCard);

  const { videos } = useYTSearch();

  const MockedVideos = () => {
    return videoList.map((e) => <VideoCard key={e.id} videoObj={e} />);
  };

  const SearchedVideos = () => {
    return videos.map((v) => {
      const vid = getDataForCard(v);
      return <VideoCard key={vid.id} videoObj={vid} />;
    });
  };

  return (
    <VideoList>
      {videos.length > 0 && <SearchedVideos />}
      <MockedVideos />
    </VideoList>
  );
}

export default HomePage;
