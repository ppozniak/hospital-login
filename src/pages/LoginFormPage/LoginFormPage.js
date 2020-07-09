import React from "react";
import LoginForm from "./LoginForm";

const LoginFormPage = () => {
  const handleSubmit = (data) => {
    console.log(data);
  };

  return <LoginForm onSubmit={handleSubmit} />;
};

export default LoginFormPage;
