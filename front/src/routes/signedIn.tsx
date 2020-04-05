import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import PageNotFound from "../components/PageNotFound";

import routes from "../config/dashboardRoutes";

const getRoutes = () => {
  const possibleRoutes = routes.reduce((accRoutes: any, current: any) => {
    // return checkPermissions(user, current.permissionsRequired)
    //   ? [...accRoutes, current]
    //   : accRoutes;
    return [...accRoutes, current];
  }, []);
  return possibleRoutes;
};

const SignedInRouter = (props: any) => (
  <Switch>
    {getRoutes().map((route, i) => (
      <Route key={i} path={route.path} component={route.component} />
    ))}
    <Route path="/dashboard" component={Dashboard} exact={true} />
    <Route path="/dashboard" component={PageNotFound} />
  </Switch>
);

export default withRouter(SignedInRouter);
