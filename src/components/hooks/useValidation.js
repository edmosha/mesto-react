import {useState} from "react";

function useValidation() {

  const [ values, setValues ] = useState({});
  const [ errors, setErrors ] = useState({});
  const [ isValid, setIsValid ] = useState(false);

  const onChange = (evt) => {
    const { name, value, validationMessage: error } = evt.target;

    setValues(values => ({ ...values, [name]: value }));
    setErrors(errors => ({ ...errors, [name]: error }));

    const form = evt.target.closest('form');
    setIsValid(form.checkValidity());
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
  }
}

export default useValidation;