import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./router/AppRouter";
import "./styles.css";

// todo: add provider and store (for reducer)

ReactDOM.render(<AppRouter></AppRouter>, document.getElementById("root"));
