import React from 'react';
import { useParams } from 'react-router';
import VideoInfo from '../../components/VideoInfo';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer.component';
import VideoTile from '../../components/VideoTile/VideoTile.component';
import { SpinnerIcon } from '../../Icons';
import { useSearchContext } from '../../providers/SearchContext';
import { useRelatedVideos, useVideoDetails } from '../../utils/hooks';
import { Centerer, ListSection, Middle, VideoGrid, VideoSection } from './Video.styles';

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

  return (
    <VideoGrid>
      <VideoSection>
        <VideoPlayer videoId={videoId} />
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
