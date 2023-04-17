import React, {useState} from 'react';
import useValidation from "./hooks/useValidation";
import AuthForm from "./AuthForm";

function Login({ handleLogin }) {

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>

      <AuthForm handleSubmit={ handleLogin } buttonText="Вход" />

    </div>
  );
}

export default Login;