import React from "react";
import Generating from "../components/Generating";
const GenAI = () => {
  return (
    <div className="relative pt-30">
      <div className="hidden absolute w-[0.2px] bg-[#252134] top-0 bottom-0 left-10  xl:block"></div>
      <div className="hidden absolute w-[0.2px] bg-[#252134] top-0 bottom-0 right-10 xl:block"></div>
      <h1 className="text-center text-6xl text-white">
        Generative AI made for creators.
      </h1>
      <p className="text-[#ADA8C3] font-sans text-center text-lg pt-8 pb-12">
        Brainwave unlocks the potential of AI-powered applications
      </p>

      <div className="flex border-[0.2px] rounded-2xl mx-15 border-[#252134]">
        <img
          src="src/assets/services/service-1.png"
          width={800}
          alt="robot-1"
        />

        <div className="relative mx-auto mt-50">
          <h1 className="text-white text-5xl font-semibold">Smartest AI</h1>
          <p className="text-lg text-[#ADA8C3] pt-8 w-65 max-w-100">
            Brainwave unlocks the potential of AI-powered applications
          </p>
          <ul className="pt-8">
            <li className="flex py-0 gap-5 border-t-[0.7px] border-[#252134] py-4">
              <img src="../src/assets/check.svg" alt="checkimg" />
              <p className="text-xl text-white">Photo generating</p>
            </li>
            <li className="flex gap-5 border-t-[0.7px] border-[#252134] py-4">
              <img src="../src/assets/check.svg" alt="checkimg" />
              <p className="text-xl text-white">Photo enhance</p>
            </li>
            <li className="flex gap-5 border-t-[0.7px] border-[#252134] py-4">
              <img src="../src/assets/check.svg" alt="checkimg" />
              <p className="text-xl text-white">Seamless Integration</p>
            </li>
          </ul>
        </div>
        <Generating className="absolute flex justify-center items-center left-120 bottom-195 w-120 bg-[#25213480] border-[0.2px] border-[#413f48] backdrop-blur-xl opacity-90 xl:flex" />
      </div>

      {/* Two Pics sides */}

      <div className="flex mt-5">
        {/* Left Content */}
        <div className="relative pl-15 border-none">
          <div className="">
            <img
              src="src/assets/services/service-2.png"
              alt="robot-2"
              width={700}
              className="rounded-2xl"
            />
          </div>
          <div>
            <h1 className="absolute">Photo editing</h1>
            <p className="absolute">
              {" "}
              Automatically enhance your photos using our AI app's photo editing
              feature. Try it now!
            </p>
          </div>
        </div>

        {/* Right Content */}

        <div className="rounded-2xl w-200 max-w-200 ml-5 mr-15 border-[0.2px] bg-[#191626]">
          <div className="m-10">
            <h1 className="text-4xl pb-4 font-semibold text-white">
              Video generation
            </h1>
            <p className="text-lg text-[#ADA8C3] w-130 ">
              The world’s most powerful AI photo and video art generation
              engine. What will you create?
            </p>
            <ul>
              <li></li>
            </ul>
          </div>

          <div className="rounded-2xl m-4 bg-amber-600">
            <img
              src="src/assets/services/service-3.png"
              className="w-full h-full object-cover"
              width={520}
              height={400}
              alt="robot-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAI;
