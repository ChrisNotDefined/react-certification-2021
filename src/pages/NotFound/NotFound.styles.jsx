import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const Container = styled.section`
  height: calc(100vh - 64px);
  position: relative;
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Code = styled.div`
  font-size: 50vw;
  color: ${decideTheme('#8884', '#4444')};
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  inset: 0;
  z-index: -1;
`;

export const Message = styled.span`
  color: ${decideTheme('inherit', 'var(--textDark)')};
  font-size: 2em;
  padding: 0 10vw;
  text-align: center;
`;

export const GoHomeButton = styled.button`
  background-color: var(--primary);
  font-size: 1rem;
  text-transform: uppercase;
  border: none;
  padding: 0.5em;
  color: white;
  border-radius: 99em;
  cursor: pointer;
  transition: background-color 200ms;

  :hover {
    background-color: var(--primary-brighter);
  }
`;
