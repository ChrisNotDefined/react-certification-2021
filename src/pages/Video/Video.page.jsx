import React from 'react';
import { useParams } from 'react-router';
import VideoInfo from '../../components/VideoInfo';
import VideoTile from '../../components/VideoTile/VideoTile.component';
import { SpinnerIcon } from '../../Icons';
import { useSearchContext } from '../../providers/SearchContext';
import { useRelatedVideos, useVideoDetails } from '../../utils/hooks';
import {
  Centerer,
  ListSection,
  Middle,
  VideoFrame,
  VideoGrid,
  VideoSection,
} from './Video.styles';

export default function VideoPage() {
  const { videoId } = useParams();
  const { selected } = useSearchContext();
  const { related, loading: loadingRelated } = useRelatedVideos({ videoId });
  const { loading: loadingDescription } = useVideoDetails({ videoId });

  const ShowRelatedVideos = () => {
    if (loadingRelated)
      return (
        <Centerer>
          <SpinnerIcon width="2em" animate />;
        </Centerer>
      );
    return related && related.map((e) => <VideoTile key={e.id.videoId} video={e} />);
  };

  const VideoPlayer = () => {
    return (
      <>
        <VideoFrame
          title="video"
          width="100%"
          src={`https://www.youtube-nocookie.com/embed/${videoId}`}
          allow="accelerometer; fullscreen; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </>
    );
  };

  return (
    <VideoGrid>
      <VideoSection>
        <VideoPlayer />
        {loadingDescription && (
          <Middle>
            <SpinnerIcon width="3em" animate />
          </Middle>
        )}
        {!loadingDescription && selected && <VideoInfo selectedVideo={selected} />}
      </VideoSection>
      <ListSection>
        <ShowRelatedVideos />
      </ListSection>
    </VideoGrid>
  );
}
