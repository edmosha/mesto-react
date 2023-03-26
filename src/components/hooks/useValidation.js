import {useState} from "react";

function useValidation(inputRef = {}) {
  let initialState;

  if (Object.keys(inputRef).length !== 0) {
    const { name, value } = inputRef.current;
    initialState = { [name]: value }
  } else {
    initialState = {};
  }

  const [ values, setValues ] = useState(initialState);
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  const onChange = (evt) => {
    const { name, value, validationMessage: error } = evt.target;

    setValues(values => ({ ...values, [name]: value }));
    setErrors(errors => ({ ...errors, [name]: error }));

    const form = evt.target.closest('form');
    setIsValid(form.checkValidity());
  }

  const checkValidity = () => {
    const { name, value, validationMessage: error } = inputRef.current;

    setValues({ ...values, [name]: value })
    setErrors({ ...errors, [name]: error})
    setIsValid(() => error === '');
  }

  const resetValidation = (values = {}, errors = {}) => {
    setValues(values);
    setErrors(errors);
    setIsValid(false);
  }

  return {
    values,
    errors,
    isValid,
    onChange,
    resetValidation,
    checkValidity,
  }
}

export default useValidation;