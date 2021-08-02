import React from 'react';
import { render } from '@testing-library/react';
import Sidebar from './Sidebar.component';

describe('Sidebar component', () => {
  it('Must use the aside tag', () => {
    const { container } = render(<Sidebar />);
    expect(container.querySelector('aside')).not.toBeUndefined();
  });
});
