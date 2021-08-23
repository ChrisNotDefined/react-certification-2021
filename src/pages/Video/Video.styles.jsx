import styled, { css } from 'styled-components';
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

const CustomScrollbar = css`
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
`;

export const VideoSection = styled.section`
  background-color: ${decideTheme('var(--primary)', 'var(--paperDark)')};
  padding: 1em;
  display: flex;
  flex-direction: column;
  transition: background-color 200ms;

  ${CustomScrollbar}

  @media (min-width: 850px) {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }
`;

export const ListSection = styled.section`
  background-color: ${decideTheme('var(--accent)', 'var(--baseDark)')};

  ${CustomScrollbar}

  @media (min-width: 850px) {
    height: calc(100vh - 64px);
    overflow-y: auto;
  }
`;

export const Centerer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 850px) {
    height: calc(100vh - 64px);
  }
`;

export const Middle = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
`;
