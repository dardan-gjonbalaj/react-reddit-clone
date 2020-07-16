import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routing from "./components/routing";
import App from "./components/app";
import store from "./store";
import Vote from "./components/vote";
import "./index.css";

console.log(store);
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routing store={store} />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
