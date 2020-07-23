import React from "react";
import FrontPage from "./pages/frontpage";
import "./app.css";

const App = () => {
  return (
    <div>
      Welcome to Reddit! Frontpage:
      {console.log(<FrontPage />)}
      <FrontPage />
    </div>
  );
};

export default App;
