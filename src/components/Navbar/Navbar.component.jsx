import React from 'react';
import { useAuthContext } from '../../providers/AuthContext';
import { useThemeContext } from '../../providers/ThemeContext';
import { useModal } from '../../utils/hooks/useModal';
import Avatar from '../Avatar';
import LoginModal from '../LoginModal';
import Search from '../Search';
import Toggler from '../Toggler';
import UserModal from '../UserModal';
import { Bar, CenteredAndExpanded, End, MenuButton, Start } from './Navbar.styles';

function Navbar({ showSidebar }) {
  const { user } = useAuthContext();
  const { darkTheme, toogleTheme } = useThemeContext();

  const loginModal = useModal();
  const userModal = useModal();

  return (
    <Bar>
      <Start>
        <MenuButton onClick={showSidebar}>
          <img src="list.svg" alt="menu-icon" />
        </MenuButton>
      </Start>
      <CenteredAndExpanded>
        <Search />
      </CenteredAndExpanded>
      <End>
        <Toggler checked={darkTheme} onChange={toogleTheme} label="Dark Mode" />
        <Avatar
          onClick={user ? userModal.openModal : loginModal.openModal}
          src={user && user.avatarUrl}
        />
      </End>
      <LoginModal showModal={loginModal.showModal} onClose={loginModal.onClose} />
      <UserModal showModal={userModal.showModal} onClose={userModal.onClose} />
    </Bar>
  );
}

export default Navbar;
