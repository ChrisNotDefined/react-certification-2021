import { API_KEY } from '../keys/YT_KEY';

const baseUrl = new URL(`https://www.googleapis.com/youtube/v3/search`);

const callForVideos = async ({ withParams }) => {
  const params = {
    key: API_KEY,
    part: 'snippet',
    type: 'video',
    ...withParams,
  };

  const reqUrl = `${baseUrl}?${new URLSearchParams(params)}`;
  const response = await fetch(reqUrl, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const videoData = await response.json();

  if (response.status !== 200) {
    if (videoData.error) {
      console.error('JSON: ', videoData.error);
      throw new Error(`Code ${response.status}: ${videoData.error}`);
    }
    throw new Error(`Failed with status: ${response.status}`);
  }

  return videoData;
};

export const queryVideos = async ({ keyword, maxResults = 18 }) => {
  try {
    console.log('API/queryVideos');
    const noKeywordErr = new Error('No keyword provided');
    if (!keyword) throw noKeywordErr;

    const params = {
      maxResults,
      q: keyword,
    };

    // Pagination not yet implemented
    // if (pageToken !== undefined) params.pageToken = pageToken;

    return await callForVideos({ withParams: params });
  } catch (error) {
    return null;
  }
};

export const queryRelated = async ({ videoId, maxResults = 18 }) => {
  try {
    console.log('API/queryRelated');
    if (!videoId) throw new Error('No videoID provided');

    const params = {
      relatedToVideoId: videoId,
      maxResults,
    };

    return await callForVideos({ withParams: params });
  } catch (error) {
    return null;
  }
};
