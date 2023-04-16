import React, {useState} from 'react';
import useValidation from "./hooks/useValidation";

function Login(props) {
  const { values, errors, isValid, onChange, checkError, onKeyDown } = useValidation();
  const submitButtonClass = `entry__submit-btn ${!isValid ? 'entry__submit-btn_inactive' : ''}`

  const handleLogin = (evt) => {
    evt.preventDefault();
    props.handleLogin(values.email, values.password);
  }

  return (
    <div className="entry">

      <h2 className="entry__title">Вход</h2>
      <form onSubmit={handleLogin} className="entry__form">

        <input value={values.email}
               onChange={ onChange }
               onBlur={ checkError }
               onKeyDown={ onKeyDown }
               name="email"
               type="email"
               className="entry__input"
               placeholder="Email"
               required
        />
        <span className="entry__input-error">{errors.email}</span>

        <input value={values.password}
               onChange={ onChange }
               onBlur={ checkError }
               onKeyDown={ onKeyDown }
               name="password"
               type="password"
               className="entry__input"
               placeholder="Пароль"
               required
        />
        <span className="entry__input-error">{errors.password}</span>

        <button className={submitButtonClass} type="submit" disabled={!isValid}>Войти</button>

      </form>

    </div>
  );
}

export default Login;