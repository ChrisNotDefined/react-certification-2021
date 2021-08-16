import { useState } from 'react';

const useForm = (submitCallback) => {
  const [values, setValues] = useState({});

  const cleanup = () => {
    setValues({});
  };

  const handleWrite = (e) => {
    e.persist();
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit =
    submitCallback &&
    ((e) => {
      if (e.preventDefault) e.preventDefault();
      submitCallback();
    });

  return { values, onChange: handleWrite, onSubmit, clearForm: cleanup };
};

export { useForm };
