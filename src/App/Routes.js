import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginFormPage from "../pages/LoginFormPage";
import AuthMethodPage from "../pages/AuthMethodPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <LoginFormPage />
        </Route>
        <Route path="/auth-method">
          <AuthMethodPage />
        </Route>
        <Route path="/home">
          <div>
            <div role="status">You succesfully logged in.</div>
            <h2>Welcome</h2>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
