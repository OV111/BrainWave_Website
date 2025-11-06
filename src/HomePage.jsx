import React from "react";
import { lazy,Suspense } from "react";
import LoadingSuspense from "./components/LoadingSuspense";

const Hero = lazy(() => import("./pages/Hero"));
const Features = lazy(() => import("./pages/Features"));
const Collabs = lazy(() => import("./pages/Collabs"));
const GenAI = lazy(() => import("./pages/GenAI"));
const Pricing = lazy(() => import("./pages/Pricing"));
const Roadmap = lazy(() => import("./pages/Roadmap"));

const HomePage = () => {
  return (
    <React.Fragment>
      <Suspense fallback={<LoadingSuspense/>}>
        <Hero />
        <div className="bg-[#0E0C15]">
          <Features />
          <Collabs />
          <GenAI />
          <Pricing />
          <Roadmap />
        </div>
      </Suspense>
    </React.Fragment>
  );
};

export default HomePage;
