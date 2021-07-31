import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import VideoCard from '../../components/VideoCard';
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

function HomePage() {
  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    fetch('mocks/youtube-videos-mock.json')
      .then((res) => res.json())
      .then((data) => {
        if (!data) return;
        const videos = data.items.map((vid) => {
          return {
            etag: vid.etag,
            channelTitle: fromHtmlEntities(vid.snippet.channelTitle),
            description: fromHtmlEntities(vid.snippet.description),
            publishedAt: vid.snippet.publishedAt,
            thumbnail: vid.snippet.thumbnails.medium.url,
            title: fromHtmlEntities(vid.snippet.title),
          };
        });
        setVideoList(videos);
      });
  }, []);

  const { videos } = useYTSearch();
  return (
    <VideoList>
      {videos.map((e) => (
        <div key={e}>{e}</div>
      ))}
      {videoList.map((e) => (
        <VideoCard key={e.etag} videoObj={e} />
      ))}
    </VideoList>
  );
}

export default HomePage;
