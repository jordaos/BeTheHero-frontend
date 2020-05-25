import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Logon from "./pages/Logon";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import NewIncident from "./pages/NewIncident";
import PrivateRoute from "./components/PrivateRoute";
import { isAuthenticated } from "./auth";

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          exact
          render={() =>
            !isAuthenticated() ? <Logon /> : <Redirect to={{ pathname: "/profile" }} />
          }
        />
        <Route path="/register" component={Register} />

        <PrivateRoute path="/profile" component={Profile} />
        <PrivateRoute path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}
