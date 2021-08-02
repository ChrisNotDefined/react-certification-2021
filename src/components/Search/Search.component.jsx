import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import styled, { css } from 'styled-components';
import { useYTSearch } from '../../utils/hooks/useYTSearch';
import { storage } from '../../utils/storage';

const Wrapper = styled.form`
  box-shadow: 0 2px 2px #0005;
  display: flex;
  max-width: 50ch;
  width: 100%;
  border-radius: 0.4em;
`;

const SearchStyles = css`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.5em 1em;
  transition: 100ms;
`;

const SearchBar = styled.input`
  ${SearchStyles}
  width: 100%;
  outline: none;
  border-radius: 0.4em 0 0 0.4em;
  font-size: 0.8rem;
  transition: 200ms;

  ::placeholder {
    color: white;
    opacity: 0.9;
    text-overflow: ellipsis;
  }

  :focus {
    background-color: var(--primary-brighter);
  }
`;

const SearchButton = styled.button`
  ${SearchStyles}
  border-left: solid 2px var(--accent);
  font-size: 0.8rem;
  border-radius: 0 0.4em 0.4em 0;
  cursor: pointer;

  :active {
    background-color: var(--primary-brighter);
  }

  & img {
    height: 0.7rem;
    transform: translateY(1px);
  }
`;

export default function Search() {
  const { fetchVideos } = useYTSearch();
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const match = useRouteMatch({
    path: '/',
    exact: true,
  });

  const handleSubmit = (e) => {
    console.log('Clicked');
    e.preventDefault();
    if (keyword === '') return;
    storage.set('search', { last: keyword });
    if (!match) history.replace('/');
    fetchVideos(keyword);
  };

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <SearchBar
        aria-label="search"
        value={keyword}
        onChange={handleInput}
        placeholder="Search"
      />
      <SearchButton>
        <img src="search.svg" alt="search-icon" />
      </SearchButton>
    </Wrapper>
  );
}
