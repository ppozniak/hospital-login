import React from "react";
import PropTypes from "prop-types";
import styles from "./field.module.scss";

// @TODO: These messages are not helpful
// They should be more like "Last name should be no longer than 50 characters."
const errorMessageMapping = {
  required: "This field is required",
  maxLength: "Provided value is too long",
  minLength: "Provided value is too short",
  isDateValid: "Must be a valid date",
};

const Field = ({ type = "text", labelText, id, register, error, ...rest }) => (
  <div className={styles.field}>
    <label className={styles.label} htmlFor={id}>
      {labelText}
      <input
        aria-invalid={!!error}
        className={styles.input}
        id={id}
        name={id}
        type={type}
        ref={register}
        {...rest}
      />
    </label>
    {error && (
      <span className={styles.error} role="alert">
        {errorMessageMapping[error.type]}
      </span>
    )}
  </div>
);

Field.propTypes = {
  type: PropTypes.oneOf(["text", "date", "number", "file"]),
  labelText: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.shape({
    type: PropTypes.oneOf([
      "required",
      "maxLength",
      "minLength",
      "isDateValid",
    ]),
  }),
  register: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default Field;
