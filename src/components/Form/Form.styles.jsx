import styled from 'styled-components';

export const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1em;
`;

export const ErrorMsg = styled.p`
  color: red;
`;

export const ActionButton = styled.button`
  background-color: var(--primary);
  width: 100%;
  padding: 1em;
  border: none;
  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  transition: background-color 200ms, filter 200ms;

  :hover {
    background-color: var(--primary-brighter);
  }

  :active {
    filter: brightness(0.7);
  }
`;
