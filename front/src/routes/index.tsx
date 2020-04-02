import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import SignedIn from "../view/SignedIn";
import Login from "../components/Login";
import Register from "../components/Register";

export default (props: any) => (
  <Switch>
    <Route path="/dashboard" component={SignedIn} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    {/* <Route path="/set-password" component={FirstTimeLogIn} />
      <Route path='/change-password' component={ChangePassword} /> */}
    <Redirect from="/" to="/dashboard" />
  </Switch>
);
