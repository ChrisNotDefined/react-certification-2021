import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const AccountDetails = styled.div`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AccountName = styled.p`
  font-size: 2rem;
  margin: 0;
  margin-top: 0.3em;
`;

export const AccountID = styled.p`
  font-size: 0.8rem;
  color: gray;
  margin: 0;
`;

export const ChangeImageButton = styled.button`
  margin-top: 1em;
  color: var(--primary);
  background: none;
  border: none;
  font-size: 0.9rem;
  padding-bottom: 0.5em;
  border-bottom: solid 2px;
  cursor: pointer;

  :hover {
    color: var(--primary-brighter);
  }
`;

export const EditImageForm = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  justify-content: stretch;
  position: relative;

  @media (max-width: 750px) {
    flex-direction: column;
  }

  & > * {
    flex: 1;
  }
`;

export const EditImageOptions = styled.div`
  flex-grow: 1.5;
  display: flex;
  flex-direction: column;
  gap: 1em;
  align-items: stretch;
  justify-content: center;
  & > button {
    background-color: var(--primary);
    font-size: 1rem;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    padding: 0.5em;
    transition: filter 100ms;

    :hover:not(:disabled) {
      filter: brightness(0.9);
    }

    :active {
      filter: brightness(1.1);
    }

    :disabled {
      opacity: 0.2;
    }
  }
`;

export const UploadingIndicator = styled.div`
  background-color: ${decideTheme('#8888', '#0008')};
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  inset: 0;
  border-radius: 10px;
`;
