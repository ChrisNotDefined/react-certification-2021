import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const CardBoard = styled.div`
  position: relative;
  user-select: none;
  background-color: ${decideTheme('white', 'var(--paperDark)')};
  box-shadow: 0 1px 4px 1px #0003;
  padding: 1em;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background-color 200ms;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  :hover {
    background-color: ${decideTheme('#eee', '#444')};
  }
`;

export const CardImage = styled.img`
  border-radius: 0.4rem;
  width: auto;
  aspect-ratio: 16 / 9;
  margin: 0;
  object-fit: cover;
  border: solid 4px var(--primary);
`;

export const CardContent = styled.p`
  color: ${decideTheme('gray', 'lightgray')};
  font-size: 0.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 3em;
  overflow: hidden;
`;

export const CardTitle = styled.h3`
  color: ${decideTheme('inherit', 'var(--textDark)')};
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  font-weight: normal;
`;

export const CardSubtitle = styled.div`
  color: gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
`;

export const RoundButton = styled.button`
  background-color: transparent;
  transition: background-color 200ms;
  border-radius: 99em;
  border: solid ${decideTheme('#8888', '#eee8')};
  margin-left: auto;
  margin-right: 0;
  margin-top: auto;
  margin-bottom: 0;
  height: 4em;
  width: 4em;
  display: flex;

  > * {
    margin: auto;
  }

  :hover {
    background-color: ${decideTheme('#8888', '#eee8')};
  }
`;
