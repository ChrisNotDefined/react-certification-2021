import styled from 'styled-components';
import { decideTheme } from '../../globalStyles';

export const transitionDuration = 200;

export const TransContainer = styled.div`
  transition: opacity ${transitionDuration}ms;
  position: absolute;
  z-index: 99;
  &.enter,
  &.exit {
    opacity: 0;
  }

  &.enter-active {
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: #0008;
  cursor: pointer;
`;

export const ModalFrame = styled.div`
  color: ${decideTheme('initial', 'var(--textDark)')};
  background: ${decideTheme('white', 'var(--paperDark)')};
  border-radius: 10px;
  box-shadow: #0004 0 8px 7px 0px;
  padding: 2em;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ModalTitle = styled.h2`
  margin: 0;
  margin-bottom: 0.5em;
  text-align: center;
  font-weight: lighter;
  font-size: 1.8rem;
`;

export const ModalContent = styled.div``;

export const ModalActions = styled.div`
  margin-top: 1em;
  display: flex;
  gap: 1.2em;
  justify-content: space-evenly;

  & > * {
    flex: 1;
  }

  & > button {
    background-color: transparent;
    color: ${decideTheme('initial', 'var(--textDark)')};
    border: solid 1px;
    border-radius: 0.5em;
    padding: 0.8em 1em;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
    transition: background-color 100ms;

    :hover {
      background-color: #8885;
    }

    :active {
      background-color: #0005;
    }

    &.primary {
      color: ${decideTheme('white', 'inherit')};
      border: ${decideTheme('none', 'inherit')};
      background-color: var(--primary);
      :hover {
        background-color: var(--primary-brighter);
      }
    }
  }
`;
