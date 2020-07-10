import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { selectAuthorizationMethod } from "../../api";
import Field from "../../components/Field";
import { useForm } from "react-hook-form";
import styles from "./authMethodPage.module.scss";
import classNames from "classnames";
import { validatePin } from "../../api";

const AuthMethodPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const [isPinInvalid, setIsPinInvalid] = useState(false);
  const [awaitingPinValidation, setAwaitingPinValidation] = useState(false);
  const { state } = useLocation();
  const { push } = useHistory();
  const { register, handleSubmit } = useForm();

  if (!state || !state.length) {
    push("/");
  }

  const handleSelect = async (method) => {
    setButtonsDisabled(true);

    try {
      await selectAuthorizationMethod(method);
      setSelectedMethod(method);
      // @TODO: Set focus on the input
    } catch (error) {
      console.error(error); // @TODO error handling
      setButtonsDisabled(false);
    }
  };

  const onSubmitPin = async ({ pin }) => {
    setIsPinInvalid(false);
    setAwaitingPinValidation(true);
    try {
      await validatePin(pin);
      push("/home");
    } catch (error) {
      setIsPinInvalid(true);
      setAwaitingPinValidation(false);
      console.log("invalid pin");
    }
  };

  return (
    <div>
      <h2>Authorization method:</h2>
      <p>
        For secure log in we need to send you a 4 digit one time code. Choose
        one of the following options
      </p>
      <ul className={styles.methodList}>
        {state.map(({ type, value }) => (
          <li className={styles.methodItem} key={value}>
            <button
              className={classNames(styles.methodButton, {
                [styles.selected]:
                  selectedMethod && selectedMethod.value === value,
              })}
              disabled={buttonsDisabled}
              type="button"
              onClick={() => handleSelect({ type, value })}
            >
              Send pin to my {type} {value}
            </button>
          </li>
        ))}
      </ul>

      <div aria-live="polite" role="region">
        {selectedMethod && (
          <>
            <p>
              We have sent you a 4 digit pin at {selectedMethod.value}. Please
              fill it in to proceed with login.
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
        )}
      </div>
    </div>
  );
};

export default AuthMethodPage;
