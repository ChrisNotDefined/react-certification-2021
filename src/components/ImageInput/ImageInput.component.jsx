import React, { useEffect, useRef, useState } from 'react';
import { Container, HtmlInput, ImagePreview, SelectButton } from './ImageInput.styles';
import { SpinnerIcon } from '../../Icons';

const ImageInput = ({ onFileSelected }) => {
  const [previewImg, setPreviewImg] = useState('');
  const fileInputRef = useRef(null);
  const readerRef = useRef(new FileReader());
  const [loadingImg, setLoadingImg] = useState(false);

  useEffect(() => {
    readerRef.current.onloadstart = () => {
      setLoadingImg(true);
    };

    readerRef.current.onloadend = () => {
      setPreviewImg(readerRef.current.result);
      setLoadingImg(false);
    };
  }, []);

  const handleFileSelected = () => {
    const file = fileInputRef.current?.files[0];
    if (file) readerRef.current.readAsDataURL(file);
    if (onFileSelected) onFileSelected(file);
  };

  const selectFile = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  return (
    <Container>
      <HtmlInput
        type="file"
        accept="image/*"
        onChange={handleFileSelected}
        ref={fileInputRef}
      />
      {loadingImg && <SpinnerIcon animate width="5em" />}
      {!loadingImg && (
        <ImagePreview
          src={previewImg !== '' ? previewImg : 'user.svg'}
          alt="Selector preview"
        />
      )}
      <SelectButton type="button" onClick={selectFile}>
        Select file
      </SelectButton>
    </Container>
  );
};

export default ImageInput;
