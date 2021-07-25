import React from 'react';
import styled, { css } from 'styled-components';

const InteractableStyles = css`
  transition: 100ms;
  cursor: pointer;
  :hover {
    filter: brightness(0.8);
  }

  :active {
    filter: brightness(0.6);
  }
`;

const CircleImage = styled.img`
  user-select: none;
  --size: ${(props) => props.size || '2em'};
  width: var(--size);
  height: var(--size);
  border-radius: 99em;
  object-fit: cover;

  ${(props) => (props.onClick ? InteractableStyles : '')}
`;

export default function Avatar({ onClick, src, size }) {
  return <CircleImage onClick={onClick} size={size} src={src || 'user.svg'} />;
}
