import React from 'react';
import { FieldContainer, FieldInput, FieldLabel } from './FormField.styles';

const FormField = ({ name, labelText, value, onChange, type = 'text' }) => {
  return (
    <FieldContainer>
      <FieldLabel htmlFor={name}>{labelText}</FieldLabel>
      <FieldInput id={name} {...{ value, onChange, name, type }} />
    </FieldContainer>
  );
};

export default FormField;
