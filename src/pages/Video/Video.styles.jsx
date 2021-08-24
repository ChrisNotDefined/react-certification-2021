import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const VideoGrid = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr;
  min-height: calc(100vh - 64px);

  @media (max-width: 1080px) {
    grid-template-columns: 2fr 1.5fr;
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

export const VideoSection = styled.section`
  background-color: ${decideTheme('var(--primary)', 'var(--paperDark)')};
  padding: 1em;
  display: flex;
  flex-direction: column;
  transition: background-color 200ms;
`;

export const ListSection = styled.section`
  background-color: ${decideTheme('var(--accent)', 'var(--baseDark)')};

  &::-webkit-scrollbar {
    width: 1ch;
    background-color: ${decideTheme('var(--accent-brighter)', 'var(--paperDark)')};
  }

  &::-webkit-scrollbar-thumb {
    border: 2px solid ${decideTheme('var(--accent-brighter)', 'var(--paperDark)')};
    background-color: var(--primary);

    :hover {
      background-color: var(--primary-brighter);
    }
  }

  @media (min-width: 850px) {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }
`;

export const VideoFrame = styled.iframe`
  background-color: black;
  max-height: max(30vw, 50vh);
  aspect-ratio: 16 / 9;
  align-self: center;
  border: none;
`;
