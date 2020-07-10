import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { getAuthorizationMethods } from "../../api";
import { useHistory } from "react-router-dom";

const LoginFormPage = () => {
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      const authorizationMethods = await getAuthorizationMethods(data);
      push("/auth-method", authorizationMethods);
    } catch (error) {
      // @TODO: Error handling - showing to user
      console.log(error);
      setLoading(false);
    }
  };

  return <LoginForm onSubmit={handleSubmit} loading={loading} />;
};

export default LoginFormPage;
