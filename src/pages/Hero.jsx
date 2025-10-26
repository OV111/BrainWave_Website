import React from "react";
import Button from "../components/Button";
import { BottomLine } from "../components/BottomLine";
import { BackgroundCircles } from "../components/BackgroundCircles";
import { ScrollParallax } from "react-just-parallax";
import Generating from "../components/Generating";
import Notification from "../components/Notification.jsx";
import Rings from "../components/Rings";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="relative overflow-hidden">
        <img
          src="../src/assets/hero/hero-background.jpg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover -z-1"
        />
        {/* Vertical line */}

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

        <div className="relative h-full max-w-[27rem] top-60 mx-auto md:max-w-5xl xl:mb-10">
          <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#ca2200] via-[#2a00d2] to-[#ffffff]">
            <div className="relative bg-[#0E0C15] rounded-[1rem]">
              <div className="h-[1.2rem] bg-[#43435c] rounded-t-[0.9rem]" />
              <div className="relative mx-auto rounded-1xl z-10 overflow-hidden ">
              {/* Robot Image */}
                <img
                  src="../src/assets/hero/robot.jpg"
                  className="relative aspect-[33/40] w-full scale-1[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
                  alt="robot pic"
                />

              {/* <div className="h-[2rem] bg-[#43435C] rounded-t-[0.9rem]" /> */}
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
