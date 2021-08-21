import React from 'react';
import { SpinnerIcon } from '../../Icons';
import { useAuthContext } from '../../providers/AuthContext';
import { identifyError } from '../../utils/firebaseErrors';
import { useForm } from '../../utils/hooks';
import FormField from '../FormField';
import { ActionButton, ErrorMsg, StatusContainer } from '../Form/Form.styles';

const LoginForm = ({ onSuccess, onError = () => {} }) => {
  const { login, error, loading } = useAuthContext();
  const { values, onChange, clearForm, submit } = useForm(() => {
    login(values.email, values.password).then((err) => {
      if (!err) {
        onSuccess();
        clearForm();
      } else {
        onError();
      }
    });
  });

  return (
    <>
      <form>
        <FormField
          name="email"
          labelText="Email:"
          value={values.email || ''}
          {...{ onChange }}
        />
        <FormField
          type="password"
          name="password"
          labelText="Password:"
          value={values.password || ''}
          {...{ onChange }}
        />
      </form>
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
        Log In
      </ActionButton>
    </>
  );
};

export default LoginForm;
