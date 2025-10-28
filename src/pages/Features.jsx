import React from "react";
import { features } from "../constants/data";
// import { background } from "../../../../brainwave/brainwave/src/assets";
import PlusSvg from "../components/PlusSvg";
import Arrow from "../components/Arrow";

const Features = () => {
  return (
    <React.Fragment>
      <div className="relative ">
        <div className="hidden absolute top-[5px] left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
        <PlusSvg className="absolute left-[34.5px] z-1"></PlusSvg>
        <PlusSvg className="absolute right-[34.5px] z-1"></PlusSvg>
        <div className="hidden absolute w-[0.2px] left-10 bottom-0 top-0 bg-[#252134] xl:block"></div>
        <div className="hidden absolute w-[0.2px] right-10 bottom-0 top-0 bg-[#252134] xl:block"></div>
        {/* <div className="hidden absolute left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
        <div className="hidden absolute right-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div>
        <div className="hidden absolute left-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div> */}

        <h1 className="w-200 max-w-210 mx-auto mb-20 pt-15 text-center font-sans tracking-normal text-[#FFFFFF] text-6xl ">
          Chat Smarter, Not Harder with Brainwave
        </h1>

        <div className="grid grid-cols-3 grid-rows-2 mx-auto w-310 gap-10">
          {features.map((feature) => (
            <div className="relative h-[330px] group pt-10 pb-8 px-10 flex flex-col justify-between text-[#CAC6DD] bg-[#0E0C15]/80 border-2  rounded-3xl min-h-[330px]">
              <div
                className="
                  absolute inset-0 
                  bg-cover bg-center opacity-0 
                  pointer-events-none
                  transition-opacity duration-800
                  group-hover:opacity-15
                  bg-[url('assets/benefits/image-2.png')]  
                "
              />
              <h2 className="text-2xl min-w-full pb-0 font-sans font-bold text-[#FFFFFF]">
                {feature.topic}
              </h2>
              <p className="text-ml">{feature.text}</p>

              <div className="flex justify-between items-center relative pt-10 gap-10 cursor-pointer">
                <img src={feature.buttonImg} alt="" className="w-12 h-12" />
                <button className="flex items-center text-lg font-mono text-white px-0">
                  Explore more
                  <Arrow />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
