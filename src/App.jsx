import React from "react";
import { lazy } from "react";
import "./index.css";
// import { RouterProvider } from 'react-router-dom'
import { Suspense } from "react";
import { HashRouter } from "react-router-dom";
import LoadingSuspense from "./components/LoadingSuspense";
import Navbar from "./components/Navbar";
import ButtonGradient from "./components/ButtonGradient";
const HomePage = lazy(() => import("./HomePage"));

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Navbar />
        <Suspense fallback={<LoadingSuspense />}>
          <HomePage />
        </Suspense>
      </HashRouter>
      <ButtonGradient />
    </React.Fragment>
  );
}

export default App;
