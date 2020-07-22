import React, { Component } from "react";
import FrontPage from "./pages/frontpage";
import "./app.css";

class App extends Component {
  render() {
    return (
      <div>
        Welcome to Reddit! Frontpage:
        {console.log(<FrontPage />)}
        <FrontPage />
      </div>
    );
  }
}
export default App;
