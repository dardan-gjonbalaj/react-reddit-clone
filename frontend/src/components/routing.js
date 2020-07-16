import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./app";
import FrontPage from "./pages/frontpage";
import Subreddit from "./pages/subreddit";
import Vote from "./vote";
import Comments from "./comments/";

const Routing = ({ store }) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Frontpage</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/">
              <App />
            </Route>
            <Route exact path="/r/:subreddit/comments/:id/:name">
              <Comments />
            </Route>
            <Route exact path="/r/:subreddit">
              <Subreddit />
            </Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
};

export default Routing;
