import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const Container = styled.div`
  background-color: ${decideTheme('white', 'var(--paperDark)')};
  padding: 1em;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: #0004 0 8px 18px 0px;
  align-items: center;
  gap: 0.5em;
`;

export const HtmlInput = styled.input`
  display: none;
`;

export const ImagePreview = styled.img`
  width: 5em;
  height: 5em;
  object-fit: cover;
  border-radius: 99em;
  border: solid var(--primary) 2px;
`;

export const SelectButton = styled.button`
  background: none;
  color: var(--primary);
  font-weight: bold;
  border: solid 2px;
  border-radius: 5px;
  transition: color 200ms, filter 100ms;
  font-size: 1rem;

  :hover {
    color: var(--accent);
  }

  :active {
    filter: brightness(0.9);
  }
`;
