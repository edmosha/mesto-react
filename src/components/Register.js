import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {register} from "../utils/Auth";
import useValidation from "./hooks/useValidation";

function Register(props) {
  const { values, errors, isValid, onChange,  checkError, onKeyDown, resetValidation } = useValidation();
  const submitButtonClass = `entry__submit-btn ${!isValid ? 'entry__submit-btn_inactive' : ''}`

  const handleRegister = (evt) => {
    evt.preventDefault();
    register(values.email, values.password)
      .then(() => {
        props.handleOk();
        resetValidation();
      })
      .catch((err) => {
        console.log(err)
        err === 400
          ? props.handleError('Пользователь с таким email уже зарегистрирован')
          : props.handleError();
      })
  }

  return (
    <div className="entry">

      <h2 className="entry__title">Регистрация</h2>
      <form onSubmit={handleRegister} className="entry__form" noValidate>

        <input value={values.email}
               onChange={ onChange }
               onBlur={ checkError }
               onKeyDown={ onKeyDown }
               name="email"
               type="email"
               className="entry__input"
               placeholder="Email"
               maxLength="30"
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
               minLength="7"
               maxLength="25"
               required
        />
        <span className="entry__input-error">{errors.password}</span>

        <button className={submitButtonClass} type="submit" disabled={!isValid}>Зарегистрироваться</button>

      </form>
      <Link to="/mesto-react/sign-in" className="entry__link" replace>Уже зарегистрированны? Войти</Link>
    </div>
  );
}

export default Register;