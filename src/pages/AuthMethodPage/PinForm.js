import React, { useState } from "react";
import Field from "../../components/Field";
import { validatePin } from "../../api";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import styles from "./authMethodPage.module.scss";

const PinForm = ({ contactValue }) => {
  const [isPinInvalid, setIsPinInvalid] = useState(false);
  const [awaitingPinValidation, setAwaitingPinValidation] = useState(false);
  const { push } = useHistory();
  const { register, handleSubmit } = useForm();

  const onSubmitPin = async ({ pin }) => {
    setIsPinInvalid(false);
    setAwaitingPinValidation(true);
    try {
      await validatePin(pin);
      push("/home");
    } catch (error) {
      setIsPinInvalid(true);
      setAwaitingPinValidation(false);
    }
  };

  return (
    <>
      <p>
        We have sent you a 4 digit pin at {contactValue}. Please fill it in to
        proceed with login.
      </p>
      <form onSubmit={handleSubmit(onSubmitPin)}>
        <Field
          labelText="Enter received 4 digit pin code"
          id="pin"
          register={register}
          maxLength={4}
          minLength={4}
          placeholder="5341"
          disabled={awaitingPinValidation}
        />
        <button disabled={awaitingPinValidation}>Submit</button>
        {isPinInvalid && (
          <div role="alert" className={styles.error}>
            The pin you provided is invalid
          </div>
        )}
      </form>
    </>
  );
};

PinForm.propTypes = {
  contactValue: PropTypes.string.isRequired,
};

export default PinForm;
