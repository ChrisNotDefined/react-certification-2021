import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Toggler from '../Toggler/Toggler.component';

const Bar = styled.nav`
  background-color: #4412a3;
  height: 64px;
  color: white;
  display: flex;
  align-items: center;
  padding: 0 1em;
  box-shadow: 0 5px 5px #0005;
`;

const MenuButton = styled.button`
  background-color: transparent;
  border-radius: 5px;
  padding: 0.5em;
  border: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;

  :hover {
    background-color: #270227;
  }
  
  :active {
    background-color: #4d044d;

  }

  & img {
    margin: auto;
    height: 1rem;
  }
`;

const SearchBar = styled.input`
  background-color: #2e0c6f;
  max-width: 50ch;
  width: 100%;
  color: white;
  border: solid 1px gray;
  padding: 0.5em 1em;
  outline: none;
  border-radius: 0.2em 0 0 0.2em;
  font-size: 0.8rem;

  ::placeholder {
    color: lightgray;
    opacity: 0.9;
    text-overflow: ellipsis;
  }

  :focus {
    background-color: #4d044d;
    transition: 50ms;
  }
`;

const SearchButton = styled.button`
  background-color: #4c229b;
  color: white;
  border: solid 1px gray;
  border-left: none;
  padding: 0.5em 1em;
  font-size: 0.8rem;
  border-radius: 0 0.2em 0.2em 0;
  cursor: pointer;

  :active {
    background-color: purple;
  }

  & img {
    height: 0.7rem;
    transform: translateY(1px);
  }
`;

const CenteredAndExpanded = styled.div`
  flex: 2;
  display: flex;
  justify-content: center;
`;

const Section = styled.div`
  display: flex;
  gap: 1em;
  flex: 1;
`;

const End = styled(Section)`
  justify-content: flex-end;
`;

function Navbar() {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <Bar>
      <Section>
        <MenuButton>
          <img src="list.svg" alt="menu-icon"></img>
        </MenuButton>
      </Section>
      <CenteredAndExpanded>
        <SearchBar placeholder="Search" />
        <SearchButton>
          <img src="search.svg" alt="search-icon" />
        </SearchButton>
      </CenteredAndExpanded>
      <End>
        <Toggler
          checked={darkTheme}
          onChange={() => {
            setDarkTheme(!darkTheme);
          }}
          label="Dark Mode"
        />
        <Avatar onClick={() => {}} />
      </End>
    </Bar>
  );
}

export default Navbar;
