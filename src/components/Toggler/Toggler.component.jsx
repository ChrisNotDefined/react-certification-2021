import React from 'react';
import styled from 'styled-components';

const HtmlInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const Switch = styled.div`
  position: relative;
  width: 3em;
  height: 2em;
  display: inline-block;
`;

const SwitchElem = styled.span`
  position: absolute;
  background-color: ${(props) => (props.checked ? 'purple' : 'lightgrey')};
  transition: 0.4s;
  inset: 0.5em;
  border-radius: 999em;
  cursor: pointer;
  box-shadow: inset 0 -2px 2px #0002;

  ::before {
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    width: 14px;
    background-color: white;
    border-radius: 99em;
    box-shadow: 0 2px 2px #0005;
    transition: 0.4s;

    ${(props) => (props.checked ? `transform: translateX(1em)` : '')}
  }
`;

const Container = styled.div`
  display: inline-flex;
  width: fit-content;
  align-items: center;
`;

export default function Toggler({ checked, onChange, label }) {
  return (
    <Container>
      <Switch onClick={onChange}>
        <HtmlInput type="checkbox" {...{ checked, onChange }} />
        <SwitchElem checked={checked} />
      </Switch>
      {label && <span>{label}</span>}
    </Container>
  );
}
