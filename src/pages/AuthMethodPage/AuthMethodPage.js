import React, { useState } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { selectAuthorizationMethod } from "../../api";
import styles from "./authMethodPage.module.scss";
import classNames from "classnames";
import PinForm from "./PinForm";

const AuthMethodPage = () => {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [buttonsDisabled, setButtonsDisabled] = useState(false);
  const { state } = useLocation();
  const { push } = useHistory();

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
        {selectedMethod && <PinForm contactValue={selectedMethod.value} />}
      </div>
    </div>
  );
};

export default AuthMethodPage;
