import { useCallback, useState } from 'react';

const useForm = (submitCallback) => {
  const [values, setValues] = useState({});

  const cleanup = () => {
    setValues({});
  };

  const handleWrite = (e) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = useCallback(
    (e) => {
      if (e.preventDefault) e.preventDefault();
      if (submitCallback) submitCallback();
    },
    [submitCallback]
  );

  return { values, onChange: handleWrite, submit: onSubmit, clearForm: cleanup };
};

export { useForm };
