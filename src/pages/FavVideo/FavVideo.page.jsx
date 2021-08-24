import React, { useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import VideoPlayer from '../../components/VideoPlayer';
import VideoTile from '../../components/VideoTile';
import { SpinnerIcon } from '../../Icons';
import { useAuthContext } from '../../providers/AuthContext';
import { useFavoritesContext } from '../../providers/FavoritesContext';
import { useSearchContext } from '../../providers/SearchContext';
import { useVideoDetails } from '../../utils/hooks';
import {
  ActionsRegion,
  ChannelTitle,
  LoadingIndicator,
  VideoContainer,
  VideoDescription,
  VideoDetails,
  VideoHeader,
  VideoList,
  VideoTitle,
} from './FavVideo.styles';

const FavVideoList = ({ videos }) => {
  const history = useHistory();

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);

  const lookFav = (videoID) => {
    history.push(`/favs=${videoID}`);
  };

  if (!videos) return <div>There are no favs yet</div>;

  return (
    <div>
      {videos.map((vid) => {
        if (!vid) return null;
        console.log(vid.id);
        return (
          <VideoTile
            key={vid.id.videoId || vid.id}
            video={vid}
            onClick={() => lookFav(vid.id.videoId || vid.id)}
          />
        );
      })}
    </div>
  );
};

const FavVideoPage = () => {
  const { creds } = useAuthContext();
  const { favs } = useFavoritesContext();
  const { videoId } = useParams();
  const { loading, error } = useVideoDetails({ videoId });
  const { selected } = useSearchContext();
  const video = favs?.[videoId] || null;

  const otherfavsList = Object.keys(favs).map((id) => {
    if (videoId !== id) return favs[id];
    return null;
  });

  if (!creds) return <Redirect to="/" />;

  if (!video || error) return <div>Failed to load video</div>;

  return (
    <>
      <VideoContainer>
        {loading && (
          <LoadingIndicator>
            <SpinnerIcon width="3rem" animate />
          </LoadingIndicator>
        )}
        {!loading && <VideoPlayer videoId={videoId} />}
      </VideoContainer>
      <ActionsRegion>
        <VideoDetails>
          <VideoTitle>{selected.snippet.title}</VideoTitle>
          <ChannelTitle>{selected.snippet.channelTitle}</ChannelTitle>
          <VideoDescription>{selected.snippet.description}</VideoDescription>
        </VideoDetails>
        <VideoList>
          <VideoHeader>Your Favorites</VideoHeader>
          <FavVideoList videos={otherfavsList} />
        </VideoList>
      </ActionsRegion>
    </>
  );
};

export default FavVideoPage;
