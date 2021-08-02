import { render } from '@testing-library/react';
import React from 'react';
import HomePage from './Home.page';

describe('Home component', () => {
  it('Have a section element', () => {
    const { container } = render(<HomePage />);

    expect(container.querySelector('section')).not.toBeUndefined();
  });

  it('Renders a list of videos', () => {
    const wrapper = render(<HomePage />);

    expect(wrapper).toMatchSnapshot();
  });
});
