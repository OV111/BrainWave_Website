import React from "react";
import { features } from "../constants/data";
import { background } from "../../../../brainwave/brainwave/src/assets";
const Features = () => {
  return (
    <React.Fragment>
      <div className="relative bg-[#0E0C15]">
        {/* <div className="hidden absolute left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
        <div className="hidden absolute right-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div>
        <div className="hidden absolute left-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div> */}

        <h1 className="w-200 max-w-210 mx-auto mb-20 text-center font-sans tracking-normal text-[#FFFFFF] text-6xl ">
          Chat Smarter, Not Harder with Brainwave
        </h1>

        <div className="grid grid-cols-3 grid-rows-2 mx-auto w-310 gap-10">
          {features.map((feature) => (
            <div className="px-10 py-10 border-2 text-[#CAC6DD] border-amber-50 rounded-[1.25rem]  group-hover:opacity-60 ">
              <div
                className="
                  absolute inset-0 
                  bg-cover bg-center opacity-0 
                  group-hover:opacity-100 
                  transition-opacity duration-500
                "
                style={{
                  backgroundImage: "../assets/benefits/image-2.png",
                }}
              ></div>
              <h2 className="text-2xl pb-6 font-sans font-bold text-[#FFFFFF]">
                {feature.topic}
              </h2>
              <p className="text-lg font-sans">{feature.text}</p>

              <div>
                <img src="" alt="" />
                <button></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Features;
