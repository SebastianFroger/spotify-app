import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import RedirectPage from "../components/RedirectPage";
import Dashboard from "../components/Dashboard";
import NotFoundPage from "../components/NotFoundPage";

class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="main">
          <Switch>
            <Route path="/" component={Home} exact={true}></Route>
            <Route path="/RedirectPage" component={RedirectPage}></Route>
            <Route path="/Dashboard" component={Dashboard}></Route>
            <Route component={NotFoundPage}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default AppRouter;
