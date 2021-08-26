import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import ImageInput from './ImageInput.component';

describe('Image Input', () => {
  beforeAll(() => {});

  const renderNode = () => render(<ImageInput />);

  afterEach(cleanup);

  it('Renders with button selector and triggers the button', () => {
    const node = renderNode();
    // node.getByText(/Select file/i);
    fireEvent.click(node.getByText(/Select file/i));
  });

  it('Handles image selection or cancelation', async () => {
    const node = renderNode();

    // Get test file
    const res = await fetch('./gato.jpg');
    const blob = await res.blob();

    const input = node.getByTestId('htmlInput');

    // Cancelation
    fireEvent.change(input, { target: { files: [] } });

    // Selection
    fireEvent.change(input, { target: { files: [blob] } });
  });
});
