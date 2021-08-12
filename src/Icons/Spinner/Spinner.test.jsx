import React from 'react';
import { render } from '@testing-library/react';
import { SpinnerIcon } from './Spinner.Icon';

describe('Spinner icon', () => {
  it('Renders with no properties specified', () => {
    const container = render(<SpinnerIcon />);
    expect(container).not.toBeNull();
  });
});
