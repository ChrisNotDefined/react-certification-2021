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
  width: 2rem;
  height: 2rem;
  border-radius: 99em;
  object-fit: cover;

  ${(props) => (props.onClick ? InteractableStyles : '')}
`;

export default function Avatar({ onClick, src }) {
  return <CircleImage onClick={onClick} src={src || 'user.svg'} />;
}
