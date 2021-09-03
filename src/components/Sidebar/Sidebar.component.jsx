import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useAuthContext } from '../../providers/AuthContext';
import { useThemeContext } from '../../providers/ThemeContext';
import { useModal } from '../../utils/hooks';
import { generateInitials } from '../../utils/strings';
import Avatar from '../Avatar';
import LoginModal from '../LoginModal';
import Toggler from '../Toggler/Toggler.component';
import UserModal from '../UserModal';
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
  const { darkTheme, toogleTheme } = useThemeContext();
  const { creds } = useAuthContext();
  const initials = generateInitials(creds?.displayName);
  const overlayRef = React.useRef(null);
  const drawerRef = React.useRef(null);

  const loginModal = useModal();
  const userModal = useModal();

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
            <Avatar
              size="100px"
              initials={creds && !creds.photoURL && initials}
              src={creds && creds.photoURL}
            />
            <HeadingActions>
              <HeadingAction onClick={creds ? userModal.openModal : loginModal.openModal}>
                {creds ? 'Account' : 'Log In'}
              </HeadingAction>
              <Toggler onChange={toogleTheme} checked={darkTheme} label="Dark Mode" />
            </HeadingActions>
          </Heading>
          <ul>
            <Option onClick={onClose} activeClassName="active" exact to="/">
              Home
            </Option>
            {creds && (
              <Option onClick={onClose} activeClassName="active" to="/favs">
                Favorites
              </Option>
            )}
          </ul>
        </Drawer>
      </CSSTransition>
      <LoginModal showModal={loginModal.showModal} onClose={loginModal.onClose} />
      <UserModal {...userModal} />
    </>
  );
}
