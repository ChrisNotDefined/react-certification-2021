import styled, { css } from 'styled-components';

export const Wrapper = styled.form`
  box-shadow: 0 2px 2px #0005;
  display: flex;
  max-width: 50ch;
  width: 100%;
  border-radius: 0.4em;
`;

export const SearchStyles = css`
  background-color: var(--primary);
  color: white;
  border: none;
  padding: 0.5em 1em;
  transition: 100ms;
`;

export const SearchBar = styled.input`
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

export const SearchButton = styled.button`
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
