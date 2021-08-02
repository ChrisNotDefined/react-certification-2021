import { queryVideos } from './youtubeAPI';

describe('Youtube API caller', () => {
  it('Return empty object if no keyword is provided', async () => {
    const result = await queryVideos({});
    expect(result).toEqual(null);
  });
});
