import React from "react";
import FrontPage from "./pages/frontpage";
import "./app.scss";

const App = () => {
  return (
    <div className="app">
      <h1 className="app__header">Welcome to Reddit! Frontpage:</h1>
      {console.log(<FrontPage />)}
      <FrontPage />
    </div>
  );
};

export default App;
