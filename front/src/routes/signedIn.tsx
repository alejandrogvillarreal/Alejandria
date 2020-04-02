import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../components/Dashboard";
import ComingSoon from "../components/ComingSoon";

export default (props: any) => (
  <Switch>
    {/* otras rutas aca arriba */}
    <Route path="/dashboard" component={Dashboard} exact={true} />
    <Route path="/dashboard" component={ComingSoon} />
  </Switch>
);
