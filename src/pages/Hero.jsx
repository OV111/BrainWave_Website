import React from "react";
import Button from "../components/Button";
import { BottomLine } from "../components/BottomLine";
import { BackgroundCircles } from "../components/BackgroundCircles";
import { ScrollParallax } from "react-just-parallax";
import PlusSvg from "../components/PlusSvg.jsx";
import Generating from "../components/Generating";
import Notification from "../components/Notification.jsx";
import Rings from "../components/Rings";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden ">
        <img
          src="../src/assets/hero/hero-background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-1 "
        />
        {/* Vertical line */}
        <div className="hidden absolute top-[5.5px] left-10 right-10 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
        <PlusSvg className="hidden absolute  right-10 z-2 pointer-events-none xl:block" />
        <PlusSvg className="hidden absolute  left-10 z-2 pointer-events-none xl:block" />

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

            <Button href={"#/pricing"} className="mx-auto relative top-10">
              Get Started
            </Button>
            <BackgroundCircles />
          </div>
        </div>

        <div className="relative pb-146 top-70 md:max-w-5xl max-w-[27rem] mx-auto">
          <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#ca2200] via-[#2a00d2] to-[#ffffff]">
            <div className="relative bg-[#0E0C15] rounded-[1rem]">
              <div className="h-[1.2rem] bg-[#43435c] rounded-t-[0.9rem]" />
              <div className="h-[730px] w-full relative mx-auto rounded-xl overflow-hidden">
                {/* Robot Image */}
                <img
                  src="../src/assets/hero/robot.jpg"
                  className="w-full h-full object-cover"
                  alt="robot pic"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <BottomLine />
    </React.Fragment>
  );
};
export default Hero;
