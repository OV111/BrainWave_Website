import React from "react";
import { Outlet } from "react-router-dom";
import Hero from "./pages/Hero";
import Features from "./pages/Features";
import Collabs from "./pages/Collabs";
import GenAI from "./pages/GenAI";
import Pricing from "./pages/Pricing";
import HowToUse from "./pages/HowToUse";
import Roadmap from "./pages/Roadmap";

const HomePage = () => {
  return (
    <React.Fragment>
      <Hero />
      <div className="bg-[#0E0C15]">
        <Features />
        <Collabs />
        <GenAI/>
        {/* <Pricing />  */}
        <HowToUse />
        <Roadmap />
      </div>
    </React.Fragment>
  );
};

export default HomePage;
