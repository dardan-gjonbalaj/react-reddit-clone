import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routing from "./components/routing";

import store from "./store";

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
