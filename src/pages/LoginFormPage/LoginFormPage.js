import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { getAuthorisationMethods } from "../../api/index";

const LoginFormPage = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data) => {
    console.log(data);
    setLoading(true);
    try {
      const authorisationMethods = await getAuthorisationMethods(data);
      console.log(authorisationMethods);
    } catch (error) {
      // @TODO: Error handling - showing to user
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return <LoginForm onSubmit={handleSubmit} loading={loading} />;
};

export default LoginFormPage;
