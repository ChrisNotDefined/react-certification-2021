import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Toggler from '../Toggler/Toggler.component';

const transitionClass = 'sidebar';
const trnsMsDuration = 300;

const Overlay = styled.div`
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

const Drawer = styled.aside`
  --sidebarWidth: max(250px, 20vw);
  position: fixed;
  top: 0;
  width: var(--sidebarWidth);
  height: 100vh;
  z-index: 11;
  background-color: white;
  box-shadow: 2px 0 2px #0002;
  transition: transform ${trnsMsDuration}ms;

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

const Heading = styled.div`
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

const HeadingActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
  color: var(--accent-brighter);
`;

const HeadingAction = styled.button`
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

const Option = styled.li`
  border-bottom: solid 4px var(--primary);
  padding: 1em;
  transition: 100ms;
  user-select: none;

  :hover {
    background: #0001;
  }

  :active {
    background: #0002;
  }
`;

export default function Sidebar({ showing, onClose }) {
  const overlayRef = React.useRef(null);
  const drawerRef = React.useRef(null);

  return (
    <>
      <CSSTransition
        nodeRef={overlayRef}
        in={showing}
        timeout={trnsMsDuration}
        classNames={transitionClass}
        unmountOnExit
      >
        <Overlay ref={overlayRef} onClick={onClose} />
      </CSSTransition>
      <CSSTransition
        nodeRef={drawerRef}
        in={showing}
        timeout={trnsMsDuration}
        classNames={transitionClass}
        unmountOnExit
      >
        <Drawer ref={drawerRef}>
          <Heading>
            <Avatar size="5em" />
            <HeadingActions>
              <HeadingAction>Iniciar Sesión</HeadingAction>
              <Toggler label="Dark Mode" />
            </HeadingActions>
          </Heading>
          <ul>
            <Option>Home</Option>
            <Option>Favorites</Option>
          </ul>
        </Drawer>
      </CSSTransition>
    </>
  );
}
