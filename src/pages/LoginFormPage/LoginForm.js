import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";
import { useForm } from "react-hook-form/dist/index.ie11";
import validateDate from "validate-date";
import Field from "../../components/Field";

const LoginForm = ({ onSubmit, loading }) => {
  const { register, handleSubmit, errors } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Log in</legend>
        <Field
          labelText="Last name"
          id="lastName"
          register={register({ maxLength: 50, required: true })}
          error={errors.lastName}
          disabled={loading}
        />
        <Field
          labelText="Date of birth (day/month/year)"
          id="dob"
          register={register({
            required: true,
            validate: {
              isDateValid: (value) =>
                validateDate(value, "boolean", "dd/mm/yyyy"),
            },
          })}
          error={errors.dob}
          disabled={loading}
          placeholder="23/12/1960"
        />
        <Field
          labelText="Post code"
          id="zip"
          register={register({ required: true, maxLength: 7, minLength: 5 })}
          error={errors.zip}
          disabled={loading}
        />

        <button disabled={loading} className={styles.submit}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </fieldset>
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  loading: PropTypes.bool,
};

export default LoginForm;
