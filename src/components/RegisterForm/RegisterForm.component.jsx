import React from 'react';
import { SpinnerIcon } from '../../Icons';
import { useAuthContext } from '../../providers/AuthContext';
import { identifyError } from '../../utils/firebaseErrors';
import { useForm } from '../../utils/hooks';
import { ActionButton, ErrorMsg, StatusContainer } from '../Form/Form.styles';
import FormField from '../FormField';

const RegisterForm = ({ onSucess, onError }) => {
  const { register, loading, error } = useAuthContext();
  const { values, onChange, submit } = useForm(() => {
    register(values).then((err) => {
      if (!err) onSucess();
      else onError();
    });
  });

  return (
    <form>
      <FormField
        name="name"
        labelText="Name"
        value={values.name || ''}
        {...{ onChange }}
      />
      <FormField
        name="email"
        labelText="Email"
        value={values.email || ''}
        {...{ onChange }}
      />
      <FormField
        type="password"
        name="password"
        labelText="Password"
        value={values.password || ''}
        {...{ onChange }}
      />
      <FormField
        type="password"
        name="repeatPass"
        labelText="Repeat Password"
        value={values.repeatPass || ''}
        {...{ onChange }}
      />
      <StatusContainer>
        {loading && (
          <SpinnerIcon
            width="2em"
            animate
            primary="var(--primary)"
            accent="var(--accent-brighter)"
          />
        )}
        {error && <ErrorMsg>{identifyError(error.code)}</ErrorMsg>}
      </StatusContainer>
      <ActionButton onClick={submit} type="submit">
        Register
      </ActionButton>
    </form>
  );
};

export default RegisterForm;
