import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import VideoInfo from '../../components/VideoInfo';
import VideoTile from '../../components/VideoTile/VideoTile.component';
import { useSearchContext } from '../../providers/SearchContext';
import { storage } from '../../utils/storage';
import { ListSection, VideoFrame, VideoGrid, VideoSection } from './Video.styles';

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
