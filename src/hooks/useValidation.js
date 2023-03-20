import React, { useCallback } from 'react';

export function useValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIdValid] = React.useState(false);

  const handleChange = (e) =>{
    const target = e.target;
    const name = target.name;
    const value = target.value;
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: target.validationMessage});
    setIdValid(target.closest("form").checkValidity());
  }

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIdValid(newIsValid);
    }, 
    [setErrors, setValues, setIdValid]
  );

  return { values, handleChange, errors, isValid, resetForm};
}