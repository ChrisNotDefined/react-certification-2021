import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Search from '../Search';
import Toggler from '../Toggler/Toggler.component';

const Bar = styled.nav`
  height: 64px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1em;
  box-shadow: 0 2px 2px #0005;
  position: sticky;
  top: 0;
  z-index: 2;
  background: linear-gradient(125deg, var(--primary) 0%, var(--accent) 100%);
`;

const MenuButton = styled.button`
  background-color: transparent;
  border-radius: 99em;
  width: 3em;
  height: 3em;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  transition: 200ms;

  :hover {
    background-color: #fff3;
  }

  :active {
    background-color: #fff8;
  }

  & img {
    margin: auto;
    height: 1.2rem;
  }
`;

const CenteredAndExpanded = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;

  @media (max-width: 600px) {
    flex: 1;
  }
`;

const Section = styled.div`
  display: flex;
  gap: 1em;
  flex: 1;
`;

const Start = styled(Section)`
  @media (max-width: 650px) {
    flex: 0.4;
  }
`;

const End = styled(Section)`
  justify-content: flex-end;

  @media (max-width: 500px) {
    display: none;
  }
`;

function Navbar({ showSidebar }) {
  const darkTheme = false;

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
        <Toggler checked={darkTheme} label="Dark Mode" />
        <Avatar />
      </End>
    </Bar>
  );
}

export default Navbar;
