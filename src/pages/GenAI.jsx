import React from "react";
import Generating from "../components/Generating";
import { VideoBar, VideoChatMessage } from "../styleComponents/VideoStyle";
import { Gradient } from "../styleComponents/Gradient";
import { VideoChatMsg } from "../components/VideoChatMsg";

import service1 from "../assets/services/service-1.png"
import service2 from "../assets/services/service-2.png"
import check from "../assets/check.svg"
import chromeCast from "../assets/genAiIcons/chrome-cast.svg"
import recording3 from "../assets/genAiIcons/recording-03.svg"
import disc2 from "../assets/genAiIcons/disc02.svg"
import recording1 from "../assets/genAiIcons/recording-01.svg"
import sliders4 from "../assets/genAiIcons/sliders-04.svg"
import service3 from "../assets/services/service-3.png"
const GenAI = () => {
  return (
    <section id="how-to-use">
      <div className="relative pt-30">
        <div className="hidden absolute w-[0.2px] bg-[#252134] top-0 bottom-0 left-10  xl:block"></div>
        <div className="hidden absolute w-[0.2px] bg-[#252134] top-0 bottom-0 right-10 xl:block"></div>
        <h1 className="mx-auto text-center font-sans text-6xl text-white">
          Generative AI made for creators.
        </h1>
        <p className="text-[#ADA8C3] font-sans text-center text-xl pt-8 pb-12">
          Brainwave unlocks the potential of AI-powered applications
        </p>

        <div className="flex border-[0.2px] rounded-2xl mx-15 border-[#252134]">
          <Gradient />
          <img
            src={service1}
            width={800}
            alt="robot-1"
            className="z-30"
          />

          <div className="relative mx-auto mt-50 overflow-hidden">
            <h1 className="text-white text-5xl font-semibold">Smartest AI</h1>
            <p className="text-lg text-[#ADA8C3] pt-8 w-65 max-w-100">
              Empowering the next generation of AI-driven experiences.
            </p>
            <ul className="pt-8">
              <li className="flex gap-5 border-t-[0.7px] border-[#252134] py-4">
                <img src={check} alt="checkimg" />
                <p className="text-xl text-white">Photo generating</p>
              </li>
              <li className="flex gap-5 border-t-[0.7px] border-[#252134] py-4">
                <img src={check} alt="checkimg" />
                <p className="text-xl text-white">Photo enhance</p>
              </li>
              <li className="flex gap-5 border-t-[0.7px] border-[#252134] py-4">
                <img src={check} alt="checkimg" />
                <p className="text-xl text-white">Seamless Integration</p>
              </li>
            </ul>
          </div>
          <Generating className="absolute flex justify-center items-center left-120 bottom-195 w-120 bg-[#25213480] border-[0.2px] border-[#413f48] backdrop-blur-sm opacity-100 xl:flex z-50" />
        </div>

        {/* Two Pics sides */}
        <div className="flex mt-5">
          {/* Left Content */}
          <div className="relative ml-15 border-[0.2px] border-[#252134] rounded-2xl">
            <div className="">
              <img
                src={service2}
                alt="robot-2"
                width={700}
                className="rounded-2xl "
              />
              <VideoChatMsg />
            </div>
            <div className="absolute bottom-40 ml-12">
              <h1 className="absolute text-white text-4xl font-semibold w-100">
                Photo editing
              </h1>
              <p className="absolute w-120 top-12 text-lg text-[#ADA8C3]">
                {" "}
                Automatically enhance your photos using our AI app's photo
                editing feature. Try it now!
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
                    src={chromeCast}
                    alt=""
                    width={35}
                    height={35}
                  />
                </li>
                <li className="p-3 bg-[#474060] rounded-2xl">
                  <img
                    src={recording3}
                    alt=""
                    width={35}
                    height={35}
                  />
                </li>
                <li className="p-3 bg-[#474060] rounded-2xl">
                  <img
                    src={disc2}
                    alt=""
                    width={35}
                    height={35}
                  />
                </li>
                <li className="p-3 bg-[#474060] rounded-2xl">
                  <img
                    src={recording1}
                    alt=""
                    width={35}
                    height={35}
                  />
                </li>
                <li className="p-3 bg-[#474060] rounded-2xl">
                  <img
                    src={sliders4}
                    alt=""
                    width={35}
                    height={35}
                  />
                </li>
              </ul>
            </div>

            <div className="relative rounded-2xl mx-4 border-none h-100 bg-[#3F3A52]">
              <img
                src={service3}
                className="w-full h-full object-cover ml-4"
                // width={520}
                // height={200}
                alt="robot-3"
              />
              <VideoChatMessage />
              <VideoBar />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GenAI;
