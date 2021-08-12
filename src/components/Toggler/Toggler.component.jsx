import React from 'react';
import { Container, HtmlInput, Label, Switch, SwitchElem } from './Toggler.styles';

export default function Toggler({ checked, onChange, label }) {
  return (
    <Container onClick={onChange}>
      <Switch>
        <HtmlInput
          name="check"
          type="checkbox"
          {...{ checked, onChange }}
          readOnly={!onChange}
        />
        <SwitchElem {...{ checked, onChange }} />
      </Switch>
      {label && <Label htmlFor="check">{label}</Label>}
    </Container>
  );
}
