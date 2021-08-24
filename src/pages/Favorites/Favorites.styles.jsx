import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const UnauthMessage = styled.section`
  min-height: calc(100vh - 64px);
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 2rem;
  padding: 0 15vw;
  font-weight: bold;
  color: ${decideTheme('inherit', 'var(--textDark)')};
`;

export const FavsSection = styled.section`
  padding: 2vw;
  min-height: calc(100vh - 64px);
  color: ${decideTheme('inherit', 'var(--textDark)')};
`;

export const EmptyList = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${decideTheme('#4448', '#FFF8')};
  font-size: max(5vh, 3em);
  width: 100%;
`;

export const FavsList = styled.div`
  display: flex;
  gap: 1em;
  padding: 2ch;
  overflow-x: auto;
  padding: 1em 0;
  height: 73vh;

  ::-webkit-scrollbar {
    height: 1em;
  }

  ::-webkit-scrollbar-track {
    background: #0004;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--primary);
    transition: background-color 200ms;

    :hover {
      background-color: var(--primary-brighter);
    }
  }

  & > *:not(${EmptyList}) {
    width: 35ch;
  }
`;
