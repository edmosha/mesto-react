import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {register} from "../utils/Auth";
import useValidation from "./hooks/useValidation";
import AuthForm from "./AuthForm";

function Register({ handleRegister }) {

  return (
    <div className="auth">
      <h2 className="auth__title">Регистрация</h2>

      <AuthForm handleSubmit={ handleRegister } buttonText="Зарегистрироваться" />
      <Link to="/sign-in" className="auth__link" replace>Уже зарегистрированны? Войти</Link>

    </div>
  );
}

export default Register;