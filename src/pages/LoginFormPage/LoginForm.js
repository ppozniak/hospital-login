import React from "react";
import PropTypes from "prop-types";
import styles from "./LoginForm.module.scss";
import { useForm } from "react-hook-form/dist/index.ie11";
import Field from "../../components/Field";
import isValidDate from "date-fns/isValid";
import parseISO from "date-fns/parseISO";

const LoginForm = ({ onSubmit, loading }) => {
  const { register, handleSubmit, errors, getValues } = useForm();
  console.log(errors);

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

        <fieldset className={styles.inlineFieldset}>
          <legend>Date of birth</legend>
          <div className={styles.fieldsGroup}>
            <Field
              labelText="Day"
              id="dob.day"
              register={register({
                required: true,
                pattern: /\d{2}/,
                maxLength: 2,
              })}
              error={errors.dob}
              disabled={loading}
              placeholder="22"
              maxLength="2"
            />
            <Field
              labelText="Month"
              id="dob.month"
              register={register({
                required: true,
                pattern: /\d{2}/,
                maxLength: 2,
              })}
              error={errors.dob}
              disabled={loading}
              placeholder="05"
              maxLength="2"
            />
            <Field
              labelText="Year"
              id="dob.year"
              register={register({
                validate: {
                  isValidDate: () => {
                    const values = getValues().dob;
                    const date = parseISO(
                      `${values.year}-${values.month}-${values.day}`
                    );
                    const isValid = isValidDate(date);
                    console.log(isValid);
                    return isValid;
                  },
                },
              })}
              error={errors.dob}
              disabled={loading}
              placeholder="1980"
              maxLength="4"
              pattern="\d{4}"
            />
          </div>
          {errors.dob && (
            <div className={styles.fieldsGroupError}>Invalid date of birth</div>
          )}
        </fieldset>
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
