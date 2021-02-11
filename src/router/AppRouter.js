import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import RedirectPage from "../components/RedirectPage";
import Dashboard from "../components/Dashboard";
import NotFoundPage from "../components/NotFoundPage";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/redirect" component={RedirectPage}></Route>
            <Route path="/dashboard" component={Dashboard}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
