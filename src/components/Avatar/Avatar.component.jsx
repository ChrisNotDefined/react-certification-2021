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

const CircleCSS = css`
  user-select: none;
  --size: ${(props) => props.size || '2rem'};
  width: var(--size);
  height: var(--size);
  border-radius: 99em;
  box-shadow: 0 0 0 2px var(--primary-brighter);
  background-color: var(--primary-brighter);
  box-sizing: border-box;
  ${(props) => (props.onClick ? InteractableStyles : '')}
`;

const CircleImage = styled.img`
  ${CircleCSS}
  object-fit: cover;
`;

const CircleText = styled.div`
  ${CircleCSS}
  font-size: calc( var(--size) * 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export default function Avatar({ onClick, src, size, initials }) {
  if (initials)
    return (
      <CircleText size={size} onClick={onClick}>
        {initials}
      </CircleText>
    );
  return <CircleImage onClick={onClick} size={size} src={src || 'user.svg'} />;
}
