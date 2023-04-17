import React from 'react';
import useValidation from "./hooks/useValidation";

function AuthForm(props) {

  const { values, errors, isValid, onChange, checkError, onKeyDown, resetValidation } = useValidation();
  const submitButtonClass = `auth__submit-btn ${!isValid ? 'auth__submit-btn_inactive' : ''}`

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.handleSubmit(values.email, values.password).then(res => {
      res && resetValidation();
    })
  }

  return (
    <form onSubmit={ handleSubmit } className="auth__form">

      <input value={values.email || ''}
             onChange={ onChange }
             onBlur={ checkError }
             onKeyDown={ onKeyDown }
             name="email"
             type="email"
             className="auth__input"
             placeholder="Email"
             required
      />
      <span className="auth__input-error">{errors.email}</span>

      <input value={values.password || ''}
             onChange={ onChange }
             onBlur={ checkError }
             onKeyDown={ onKeyDown }
             name="password"
             type="password"
             className="auth__input"
             placeholder="Пароль"
             required
      />
      <span className="auth__input-error">{errors.password}</span>

      <button className={submitButtonClass} type="submit" disabled={!isValid}>{props.buttonText}</button>

    </form>
  );
}

export default AuthForm;