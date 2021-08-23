import React, { useEffect } from 'react';
import { Redirect, useHistory, useParams } from 'react-router';
import VideoPlayer from '../../components/VideoPlayer';
import VideoTile from '../../components/VideoTile';
import { useAuthContext } from '../../providers/AuthContext';
import { useFavoritesContext } from '../../providers/FavoritesContext';
import {
  ActionsRegion,
  ChannelTitle,
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
        return <VideoTile key={vid.id} video={vid} onClick={() => lookFav(vid.id)} />;
      })}
    </div>
  );
};

const FavVideoPage = () => {
  const { creds } = useAuthContext();
  const { favs } = useFavoritesContext();
  const { videoId } = useParams();
  const video = favs?.[videoId] || null;

  const otherfavsList = Object.keys(favs).map((id) => {
    if (videoId !== id) return favs[id];
    return null;
  });

  if (!creds) return <Redirect to="/" />;

  if (!video) return <div>Failed to load video</div>;

  return (
    <>
      <VideoContainer>
        <VideoPlayer videoId={videoId} />
      </VideoContainer>
      <ActionsRegion>
        <VideoDetails>
          <VideoTitle>{video.snippet.title}</VideoTitle>
          <ChannelTitle>{video.snippet.channelTitle}</ChannelTitle>
          <VideoDescription>{video.snippet.description}</VideoDescription>
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
