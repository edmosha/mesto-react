import {useState} from "react";

function useValidation() {

  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  const onChange = (evt) => {
    const { name, value } = evt.target;
    setValues(values => ({ ...values, [name]: value }));
  }

  const checkError = (evt) => {
    const { name, validationMessage: error } = evt.target;
    setErrors(errors => ({ ...errors, [name]: error }));

    const form = evt.target.closest('form');
    setIsValid(form.checkValidity());
  }

  const onKeyDown = (evt) => {
    evt.key === 'Enter' && checkError(evt);
    console.log(evt.key)
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
    checkError,
    onKeyDown,
    resetValidation
  }
}

export default useValidation;