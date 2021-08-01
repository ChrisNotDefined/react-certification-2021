import { API_KEY } from '../keys/YT_KEY';

const baseUrl = new URL(`https://www.googleapis.com/youtube/v3/search`);

export const queryVideos = async ({ keyword, pageToken, maxResults = 10 }) => {
  const noKeywordErr = new Error('No keyword provided');

  try {
    if (!keyword) throw noKeywordErr;

    const params = {
      key: API_KEY,
      part: 'snippet',
      type: 'video',
      maxResults,
    };

    params.q = keyword;
    if (pageToken !== undefined) params.pageToken = pageToken;

    const reqUrl = `${baseUrl}?${new URLSearchParams(params)}`;
    const response = await fetch(reqUrl, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.status !== 200) {
      console.log('Failed with status: ', response.status);
      console.error(response.body);
    }

    const videoData = await response.json();
    return videoData;
  } catch (error) {
    console.error('Error getting response');
    console.error(error);
    if (error === noKeywordErr) throw error;
    return null;
  }
};
