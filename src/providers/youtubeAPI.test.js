import { cleanup } from '@testing-library/react';
import * as keys from '../keys/YT_KEY';
import { queryVideos } from './youtubeAPI';

describe('Youtube API caller', () => {
  afterEach(cleanup);

  it('Return empty object if no keyword is provided', async () => {
    const result = await queryVideos({});
    expect(result).toBeNull();
  });

  it('Handles an unauthorized request', async () => {
    keys.API_KEY = 'invalidKey';

    console.error = jest.fn();
    const result = await queryVideos({ keyword: 'dnb' });
    expect(result).toBeNull();
    expect(console.error).toBeCalled();
  });
});
