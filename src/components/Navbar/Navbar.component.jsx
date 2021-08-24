import React from 'react';
import { useThemeContext } from '../../providers/ThemeContext';
import Avatar from '../Avatar';
import Search from '../Search';
import Toggler from '../Toggler/Toggler.component';
import { Bar, CenteredAndExpanded, End, MenuButton, Start } from './Navbar.styles';

function Navbar({ showSidebar }) {
  const { darkTheme, toogleTheme } = useThemeContext();

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
        <Avatar />
      </End>
    </Bar>
  );
}

export default Navbar;
