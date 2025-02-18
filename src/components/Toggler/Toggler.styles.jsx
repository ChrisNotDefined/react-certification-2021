import styled from 'styled-components';

export const HtmlInput = styled.input`
  opacity: 0;
  position: absolute;
  width: 0;
  height: 0;
`;

export const Switch = styled.div`
  position: relative;
  width: 3em;
  height: 2em;
  display: inline-block;
`;

export const SwitchElem = styled.div`
  position: absolute;
  background-color: ${(props) => (props.checked ? 'var(--primary)' : 'lightgrey')};
  transition: 0.4s;
  left: 0;
  right: 1em;
  top: 0.5em;
  bottom: 0.5em;
  border-radius: 999em;
  box-shadow: inset 0 0px 10px 1px #0004;

  ::before {
    content: '';
    position: absolute;
    top: 2px;
    bottom: 2px;
    left: 2px;
    width: 14px;
    background-color: ${(props) => (props.onChange !== undefined ? 'white' : 'gray')};
    border-radius: 99em;
    box-shadow: 0 2px 2px #0005;
    transition: 0.4s;

    ${(props) => (props.checked ? `transform: translateX(1em)` : '')}
  }
`;

export const Container = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;

  &,
  & label {
    cursor: pointer;
  }
`;

export const Label = styled.label`
  margin: auto;
  user-select: none;
`;
