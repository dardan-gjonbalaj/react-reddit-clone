import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./app";
import Subreddit from "./pages/subreddit";
import SavedPosts from "./pages/savedposts";
import Comments from "./comments/";

const Routing = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Frontpage</Link>
          </li>
          <li>
            <Link to="/Saved_Posts"> Saved Posts</Link>
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
          <Route exact path="/Saved_Posts">
            <SavedPosts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default Routing;
