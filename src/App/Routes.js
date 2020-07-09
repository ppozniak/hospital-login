import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginFormPage from "../pages/LoginFormPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <LoginFormPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
