import React from "react";
import Generating from "../components/Generating";
import { VideoBar, VideoChatMessage } from "../components/VideoStyle";
// import disc02 from "../constants/data.js"
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
          <div className="absolute bottom-40 ml-12">
            <h1 className="absolute text-white text-4xl font-semibold w-100">
              Photo editing
            </h1>
            <p className="absolute w-120 top-12 text-lg text-[#ADA8C3]">
              {" "}
              Automatically enhance your photos using our AI app's photo editing
              feature. Try it now!
            </p>
          </div>
        </div>

        {/* Right Content */}

        <div className="rounded-2xl w-200 max-w-200 ml-5 mr-15 border-[0.2px] bg-[#191626]">
          <div className="m-10 ml-12">
            <h1 className="text-4xl pb-4  font-semibold text-white">
              Video generation
            </h1>
            <p className="text-lg text-[#ADA8C3] w-130">
              The world’s most powerful AI photo and video art generation
              engine. What will you create?
            </p>
            <ul className="flex mt-10 pb-1 justify-between items-center mx-auto max-w-140 ">
              <li className="p-3 bg-[#474060] rounded-2xl">
                <img
                  src="src/assets/genAiIcons/chrome-cast.svg"
                  alt=""
                  width={35}
                  height={35}
                />
              </li>
              <li className="p-3 bg-[#474060] rounded-2xl">
                <img
                  src="src/assets/genAiIcons/recording-03.svg"
                  alt=""
                  width={35}
                  height={35}
                />
              </li>
              <li className="p-3 bg-[#474060] rounded-2xl">
                <img
                  src="src/assets/genAiIcons/disc02.svg"
                  alt=""
                  width={35}
                  height={35}
                />
              </li>
              <li className="p-3 bg-[#474060] rounded-2xl">
                <img
                  src="src/assets/genAiIcons/recording-01.svg"
                  alt=""
                  width={35}
                  height={35}
                />
              </li>
              <li className="p-3 bg-[#474060] rounded-2xl">
                <img
                  src="src/assets/genAiIcons/sliders-04.svg"
                  alt=""
                  width={35}
                  height={35}
                />
              </li>
            </ul>
          </div>

          <div className="relative rounded-2xl mx-4 border-none h-100 bg-[#3F3A52]">
            <img
              src="src/assets/services/service-3.png"
              className="w-full h-full object-cover ml-4"
              // width={520}
              // height={200}
              alt="robot-3"
            />
            <VideoChatMessage />
            <VideoBar cl/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenAI;
