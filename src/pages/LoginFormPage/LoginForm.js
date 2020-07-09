import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";
import { yupResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Field from "../../components/Field";

const schema = yup.object().shape({
  lastName: yup.string().required().max(50),
  dob: yup.date().required(),
  zip: yup.string().required().min(5).max(7),
});

const LoginForm = ({ onSubmit }) => {
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Log in</legend>
        <Field
          labelText="Last name"
          id="lastName"
          register={register}
          error={errors.lastName}
        />
        <Field
          labelText="Date of birth (day/month/year)"
          id="dob"
          type="date"
          register={register}
          error={errors.dob}
        />
        <Field
          labelText="Post code"
          id="zip"
          register={register}
          error={errors.zip}
        />

        <button className={styles.submit}>Submit</button>
      </fieldset>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
