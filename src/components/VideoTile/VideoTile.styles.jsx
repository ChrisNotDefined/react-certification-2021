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
  display: flex;
  flex-direction: column;
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

export const CardRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin: 0.5em 0;
  margin-bottom: 0;
  align-self: stretch;
`;

export const Subtitle = styled.p`
  font-size: 0.7rem;
  margin: 0;
`;

export const FavBtn = styled.button`
  background-color: transparent;
  border: none;
  border-radius: 99em;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  height: 3em;
  aspect-ratio: 1;
  transition: backdrop-filter 150ms;
  cursor: pointer;

  :hover {
    --brightAmount: ${decideTheme('0.9', '1.4')};
    backdrop-filter: brightness(var(--brightAmount));
  }
`;
