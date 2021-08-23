import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const VideoContainer = styled.section`
  background-color: ${decideTheme('var(--accent)', '#111')};
  transition: background-color 200ms;
  @media (min-width: 1000px) {
    padding: 0 15vw;
  }
`;

export const ActionsRegion = styled.section`
  color: ${decideTheme('inherit', 'var(--textDark)')};

  @media (min-width: 900px) {
    display: flex;

    > * {
      flex: 1;
    }
  }
`;

export const VideoDetails = styled.div`
  padding: 0 1em;
  background-color: ${decideTheme('var(--primary)', 'var(--paperDark)')};
  color: ${decideTheme('white', 'var(--textDark)')};
  transition: background-color 200ms;
  height: calc(100vh - 64px);
  overflow-y: auto;

  @media (min-width: 900px) {
    position: sticky;
    top: 64px;
  }
`;

export const VideoTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: lighter;
  margin-bottom: 0.2em;
  margin-top: 0;
  padding-top: 1em;
`;

export const ChannelTitle = styled.h3`
  font-weight: lighter;
  margin-top: 0;
  font-size: 1.1rem;
`;

export const VideoDescription = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0;
  padding-bottom: 1em;
`;

export const VideoHeader = styled.h4`
  margin: 0;
  padding: 0.5em;
  text-align: center;
  background-color: ${decideTheme('var(--primary)', 'var(--paperDark)')};
  transition: background-color 200ms;
  position: sticky;
  top: 64px;

  @media (min-width: 900px) {
    margin-left: 0.2em;
    position: static;
  }
`;

export const VideoList = styled.div`
  flex: 0.7;
  background-color: ${decideTheme('var(--accent)', '#111')};
  transition: background-color 200ms;
  color: ${decideTheme('white', 'var(--textDark)')};
`;
