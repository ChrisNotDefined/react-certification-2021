import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const Container = styled.div`
  color: ${decideTheme('white', 'var(--textDark)')};
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em 0;
`;

export const VideoTitle = styled.h2`
  margin: 0;
`;

export const ChannelTitle = styled.h4`
  margin: 0;
  font-size: 1rem;
  border-top: solid 3px;
  padding-top: 0.5em;
`;

export const VideoDesc = styled.p`
  margin: 0;
  font-size: 0.8rem;
`;

export const FavButton = styled.button`
  color: ${decideTheme('white', 'var(--textDark)')};
  font-size: 0.8rem;
  border: none;
  border-radius: 5px;
  width: max-content;
  background-color: transparent;
  align-items: center;
  display: flex;
  padding: 1em;
  gap: 1em;
  transition: background-color 200ms;

  :hover {
    background-color: #fff3;
  }
`;
