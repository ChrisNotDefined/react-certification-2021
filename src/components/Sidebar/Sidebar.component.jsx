import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useThemeContext } from '../../providers/ThemeContext';
import Avatar from '../Avatar';
import Toggler from '../Toggler/Toggler.component';
import {
  Drawer,
  Heading,
  HeadingAction,
  HeadingActions,
  Option,
  Overlay,
  transitionClass,
  trnsMsDuration,
} from './Sidebar.styles';

export default function Sidebar({ showing, onClose }) {
  const overlayRef = React.useRef(null);
  const drawerRef = React.useRef(null);
  const { darkTheme, toogleTheme } = useThemeContext();

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
              <Toggler onChange={toogleTheme} checked={darkTheme} label="Dark Mode" />
            </HeadingActions>
          </Heading>
          <ul>
            <Option onClick={onClose} activeClassName="active" exact to="/">
              Home
            </Option>
            <Option to="/fav">Favorites</Option>
          </ul>
        </Drawer>
      </CSSTransition>
    </>
  );
}
