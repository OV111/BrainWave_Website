import React from "react";
import Button from "../components/Button";
import { BottomLine } from "../components/BottomLine";
import { BackgroundCircles } from "../components/BackgroundCircles";
import { ScrollParallax } from "react-just-parallax";
import PlusSvg from "../components/PlusSvg.jsx";
import Generating from "../components/Generating";
import Notification from "../components/Notification.jsx";
import Rings from "../components/Rings";

import { companys } from "../constants/data.js";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative  overflow-hidden ">
        <img
          src="../src/assets/hero/hero-background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-1 "
        />
        {/* Vertical & horizontal Lines */}
        <div className="hidden absolute left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
        <div className="hidden absolute right-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div>
        <div className="hidden absolute left-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div>
        <PlusSvg className="hidden absolute right-[34.5px] z-2 pointer-events-none xl:block" />
        <PlusSvg className="hidden absolute left-[34.5px] z-2 pointer-events-none xl:block" />

        <div className="relative top-24 mx-auto text-center">
          <h1 className="font-semibold tracking-normal text-[#FFFFFF] mx-auto text-7xl w-230 max-w-[230]">
            Explore the Possibilities of AI Chatting with{" "}
            <span className="inline-block relative">
              BrainWave
              <img
                src="../src/assets/hero/curve.png"
                alt="curve of brainwave"
                className="absolute top-full w-full xl:-mt-2"
              />
            </span>
          </h1>

          <div className="relative top-10">
            <p className="font-normal mx-auto relative text-2xl w-190 max-w-360 text-[#CAC6DD]">
              Unleash the power of AI within BrainWave. Upgrade your
              productivity with BrainWave, the open AI chat app.
            </p>

            <Button
              href={"#/pricing"}
              className="mx-auto relative top-10"
            >
              Get Started
            </Button>
            <BackgroundCircles />
          </div>
        </div>
        {/* pb-146 */}
        <div className="relative mb-106 top-60 md:max-w-5xl max-w-[27rem] mx-auto">
          <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#ca2200] via-[#2a00d2] to-[#ffffff]">
            <div className="relative bg-[#0E0C15] rounded-[1rem]">
              <div className="h-[1rem] bg-[#43435c] rounded-t-[0.9rem]" />
              <div className="h-[450px] w-full relative mx-auto rounded-xl overflow-hidden">
                {/* Robot Image */}
                <img
                  src="../src/assets/hero/robot2.jpg"
                  className="w-full h-full  object-cover"
                  alt="robot pic"
                />
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-center text-xl font-mono  text-[#ADA8C3]">
          Helping People Create Beautiful Content At
        </h3>
        <div className="flex justify-between items-center gap-10">
          {companys.map((company) => (
            <li key={company.id}>
              <img
                src={company.img}
                alt="company's"
                className="h-15 w-70 max-w-70"
              />
            </li>
          ))}
        </div>
      </div>

      <BottomLine />
    </React.Fragment>
  );
};
export default Hero;
