import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const transitionClass = 'sidebar';
export const trnsMsDuration = 300;

export const Overlay = styled.div`
  position: fixed;
  background-color: #0008;
  z-index: 10;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  transition: opacity ${trnsMsDuration}ms;

  &.${transitionClass}-enter {
    opacity: 0;
  }

  &.${transitionClass}-enter-active {
    opacity: 1;
  }

  &.${transitionClass}-exit {
    opacity: 1;
  }

  &.${transitionClass}-exit-active {
    opacity: 0;
  }
`;

export const Drawer = styled.aside`
  --sidebarWidth: max(250px, 20vw);
  position: fixed;
  top: 0;
  width: var(--sidebarWidth);
  height: 100vh;
  z-index: 11;
  box-shadow: 2px 0 2px #0002;
  color: ${decideTheme('inherit', 'var(--textDark)')};
  background-color: ${decideTheme('white', 'var(--baseDark)')};
  transition: transform ${trnsMsDuration}ms, background-color 200ms;

  &.${transitionClass}-enter {
    transform: translateX(calc(var(--sidebarWidth) * -1));
  }

  &.${transitionClass}-enter-active {
    transform: translateX(0);
  }

  &.${transitionClass}-exit {
    transform: translateX(0);
  }

  &.${transitionClass}-exit-active {
    transform: translateX(calc(var(--sidebarWidth) * -1));
  }
`;

export const Heading = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
  justify-content: center;
  background-image: radial-gradient(
    circle at bottom,
    var(--primary) 0,
    var(--accent) 100%
  );
`;

export const HeadingActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: var(--accent-brighter);
`;

export const HeadingAction = styled.button`
  color: var(--accent-brighter);
  border: solid 2px;
  border-radius: 99em;
  font-size: 1rem;
  padding: 0.2em 0.5em;
  background: transparent;
  cursor: pointer;

  :hover {
    background: #0002;
  }

  :active {
    background: #0003;
  }
`;

export const Option = styled(NavLink)`
  color: inherit;
  display: block;
  border-bottom: solid 4px var(--primary);
  padding: 0.7em 1em;
  transition: 100ms;
  user-select: none;
  cursor: pointer;

  :hover {
    background: ${decideTheme('#0001', '#fff1')};
  }

  :active {
    background: ${decideTheme('#0002', '#fff2')};
  }

  &.active {
    font-weight: bold;
    color: ${decideTheme('black', 'white')};
  }
`;
