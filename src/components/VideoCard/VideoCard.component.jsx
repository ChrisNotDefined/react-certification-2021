import React from 'react';
import styled from 'styled-components';
// import Avatar from '../Avatar';

const CardBoard = styled.div`
  background-color: white;
  box-shadow: 0 1px 4px 1px #0003;
  margin-bottom: 1em;
  padding: 1em;
  min-width: 30ch;
  border-radius: 0.2rem;
`;

const CardImage = styled.img`
  border-radius: 0.4rem;
  width: 100%;
  height: 250px;
  object-fit: cover;
  border: solid 4px var(--primary);
`;

const CardContent = styled.p`
  color: gray;
  font-size: 0.8rem;
  text-overflow: fade;
  max-height: 3em;
  overflow-y: hidden;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

const CardSubtitle = styled.div`
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

export default function VideoCard({ videoObj }) {
  return (
    <CardBoard>
      <CardImage src={videoObj.thumbnail} alt={`${videoObj.title}thumbnail`} />
      <CardTitle>{videoObj.title}</CardTitle>
      <CardSubtitle>{videoObj.channelTitle}</CardSubtitle>
      <CardContent>{videoObj.description}</CardContent>
    </CardBoard>
  );
}
