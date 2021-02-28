import _ from "lodash";
import {
  getUrlParams,
  handleLogout,
  CookieDataHandler,
} from "../utils/functions";
import React from "react";

export default class RedirectPage extends React.Component {
  componentDidMount() {
    const { history, location } = this.props;
    try {
      if (_.isEmpty(location.hash)) {
        return history.push("/dashboard");
      }

      const access_token = getUrlParams(location.hash);
      localStorage.setItem("params", JSON.stringify(access_token));

      // set timeout to log out
      setTimeout(handleLogout, access_token.expires_in * 1000);

      history.push("/app");
    } catch (error) {
      history.push("/");
    }
  }
  render() {
    return null;
  }
}
