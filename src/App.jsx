import React from "react";
import "./index.css";
import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import ButtonGradient from "./components/ButtonGradient";
import HomePage from "./HomePage";

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Navbar />
        <HomePage />
      </HashRouter>
      <ButtonGradient />
    </React.Fragment>
  );
}

export default App;
