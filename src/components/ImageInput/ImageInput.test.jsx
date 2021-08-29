import React from 'react';
import { act, fireEvent, render } from '@testing-library/react';
import ImageInput from './ImageInput.component';

describe('Image Input', () => {
  const renderNode = () => render(<ImageInput />);

  it('Renders with button selector and triggers the button', async () => {
    const node = renderNode();
    fireEvent.click(node.getByText(/Select file/i));
  });

  it('Handles image selection or cancelation', async () => {
    // Get test file
    const res = await fetch('./gato.jpg');
    const blob = await res.blob();

    const node = renderNode();
    const input = node.getByTestId('htmlInput');
    // Cancelation
    fireEvent.change(input, { target: { files: [] } });
    // Selection
    fireEvent.change(input, { target: { files: [blob] } });

    await act(() => Promise.resolve());
  });
});
