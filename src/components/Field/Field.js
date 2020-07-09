import React from "react";
import PropTypes from "prop-types";
import styles from "./field.module.scss";

const errorMessageMapping = {
  required: "This field is required",
  max: "Provided value is too long",
  min: "Provided value is too short",
  typeError: "Must be a valid date",
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
    type: PropTypes.oneOf(["required", "max", "min", "typeError"]),
  }),
  register: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
};

export default Field;
