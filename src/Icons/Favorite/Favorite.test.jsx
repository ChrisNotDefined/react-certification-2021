import { render } from '@testing-library/react';
import React from 'react';
import { FavoriteIcon } from './Favorite.Icon';

describe('Favoritre Icon', () => {
  it('Renders with no issues', () => {
    const container = render(<FavoriteIcon active />);
    expect(container).not.toBeNull();
  });
});
