import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { useSearchContext } from '../../providers/SearchContext';
import { storage } from '../../utils/storage';
import { SearchBar, SearchButton, Wrapper } from './Search.styles';

export default function Search() {
  const { search } = useSearchContext();
  const [keyword, setKeyword] = useState('');
  const history = useHistory();
  const match = useRouteMatch({
    path: '/',
    exact: true,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword === '') return;
    storage.set('search', { last: keyword });
    if (!match) history.replace('/');
    search({ keyword });
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
