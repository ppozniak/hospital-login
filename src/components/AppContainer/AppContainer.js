import React from "react";
import PropTypes from "prop-types";
import styles from "./AppContainer.module.scss";
import Logo from "../../assets/logo.svg";

const AppContainer = ({ children }) => {
  return (
    <div className={styles.appPositioner}>
      <div className={styles.container}>
        <header className={styles.header}>
          <Logo className={styles.logo} />
          <h1 className="sr-only">DrDoctor website</h1>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

AppContainer.propTypes = {
  children: PropTypes.node,
};

export default AppContainer;
