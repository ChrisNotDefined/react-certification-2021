import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const Container = styled.div`
  background-color: ${decideTheme('white', 'var(--paperDark)')};
  box-shadow: 0 1px 2px #0002;
  border-radius: 5px;
  height: 6em;
  margin: 0.3em 0.2em;
  padding: 0.5em;
  overflow-y: hidden;
  display: flex;
  gap: 0.5em;
  cursor: pointer;
  transition: background-color 200ms;

  @media (max-width: 850px) {
    height: 8em;
  }

  :hover {
    background-color: ${decideTheme('#eee', '#444')};
  }
`;

export const Thumbnail = styled.img`
  aspect-ratio: 16 / 9;
  object-fit: cover;
  border-radius: 5px;
`;

export const TileData = styled.div`
  color: ${decideTheme('initial', 'var(--textDark)')};
  width: 100%;
`;

export const Title = styled.div`
  border-bottom: solid 2px var(--primary);
  line-height: 1.1em;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 2.2em;
  overflow: hidden;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Subtitle = styled.p`
  margin: 0.5em 0;
  font-size: 0.7rem;
  text-align: end;
`;
