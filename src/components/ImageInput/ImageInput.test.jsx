import React from 'react';
import { cleanup, render } from '@testing-library/react';
import ImageInput from './ImageInput.component';

describe('Image Input', () => {
  beforeAll(() => {});

  const renderNode = () => render(<ImageInput />);

  afterEach(cleanup);

  it('Renders with button selector', () => {
    const node = renderNode();
    node.getByText(/Select file/i);
  });
});
