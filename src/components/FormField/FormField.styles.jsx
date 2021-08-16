import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const FieldContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.6em;
`;

export const FieldLabel = styled.label`
  margin-right: 1em;
  cursor: pointer;
`;

export const FieldInput = styled.input`
  max-width: 25ch;
  background-color: ${decideTheme('#CCC8', '#0005')};
  transition: background-color 200ms, border 200ms;
  border-radius: 5px;
  border: none;
  border-bottom: solid grey 3px;
  padding: 0.2em;
  padding-bottom: 0;
  font-size: 1.125rem;
  color: ${decideTheme('inherit', 'var(--textDark)')};

  :focus {
    cursor: pointer;
    border-bottom: solid var(--primary) 3px;
    outline: none;
    background-color: ${decideTheme('#0003', '#5555')};
  }
`;
