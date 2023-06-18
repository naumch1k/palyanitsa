import { useState, useCallback } from 'react';

function useFormWithValidation(initialValues, successfulSubmitMessage) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleChange = evt => {
    const target = evt.target;
    const name = target.name;
    const value = target.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
    setSubmitStatus('');
  };

  const resetForm = useCallback(
    (newErrors = {}, newIsValid = false) => {
      setValues(initialValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
      setSubmitStatus(successfulSubmitMessage);
    },
    [setValues, setErrors, setIsValid]
  );

  return {
    values,
    handleChange,
    errors,
    isValid,
    submitStatus,
    resetForm,
  };
}

export default useFormWithValidation;
