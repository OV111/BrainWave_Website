import React from "react";
import { motion } from "motion/react";
import Button from "../components/Button";
import BottomLine from "../styleComponents/BottomLine.jsx";
import { BackgroundCircles } from "../components/BackgroundCircles";
import PlusSvg from "../styleComponents/PlusSvg.jsx";
import Generating from "../components/Generating";
import { companys, icons } from "../constants/data.js";
import { Gradient } from "../styleComponents/Gradient.jsx";

import robot from "../assets/hero/robot2.jpg";
import hero from "../assets/hero/hero-background.jpg";
import curve from "../assets/hero/curve.png";
import image1 from "../assets/notification/image-1.png";
import image4 from "../assets/notification/image-4.png";
import image2 from "../assets/notification/image-2.png";
import image3 from "../assets/notification/image-3.png";

const Hero = () => {
  return (
    <React.Fragment>
      <section id="hero">
        <div className="relative overflow-hidden pb-10">
          <img
            src={hero}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10 "
          />
          {/* Vertical & horizontal Lines */}
          <div className="hidden absolute top-23 left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
          <div className="hidden absolute right-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div>
          <div className="hidden absolute left-10 top-0 bottom-0 w-[0.2px] bg-[#252134] xl:block"></div>
          <PlusSvg className="hidden absolute right-[34.5px] z-2 pointer-events-none xl:block" />
          <PlusSvg className="hidden absolute left-[34.5px] z-2 pointer-events-none xl:block" />

          <div className="relative top-50 mx-auto text-center">
           <div className="flex">
              <h1 className="font-semibold text-[#FFFFFF] text-center mx-auto text-6xl w-220 max-w-260">
                Explore the Possibilities of AI Chatting with{" "}
                <span className="relative inline-block">
                  BrainWave
                  <img
                    src={curve}
                    alt="curve of brainwave"
                    className="absolute top-full w-full xl:-mt-2"
                  />
                </span>
              </h1>
            </div>

            <div className="relative top-8">
              <p className="font-normal mx-auto relative text-[1.25rem] w-190 max-w-360 text-[#CAC6DD]">
                Unleash the power of AI within BrainWave. Upgrade your
                productivity with BrainWave, the open AI chat app.
              </p>

              <Button
                href={"#/pricing"}
                className="mx-auto font-mono relative top-10 text-[#CAC6DD]"
              >
                Get Started
              </Button>
              <BackgroundCircles />
            </div>
          </div>
          <div className="relative mb-106 top-85 md:max-w-5xl max-w-[27rem] mx-auto">
            <div className="relative z-1 p-0.5 rounded-2xl bg-gradient-to-r from-[#6333a8] via-[#cdc0ff] to-[#242e93]">
              <div className="relative bg-[#0E0C15] rounded-[1rem]">
                <div className="h-[1rem] bg-[#43435c] rounded-t-[0.9rem]" />
                <div className="h-[470px] w-full relative mx-auto rounded-xl rounded-tr-none rounded-tl-none overflow-hidden ">
                  {/* Robot Image */}
                  <img
                    src={robot}
                    className="w-full h-full object-cover"
                    alt="robot pic"
                  />
                  <Generating className="absolute flex justify-center top-100 left-70 w-120 bg-[#25213480] border-[0.2px] border-[#413f48] backdrop-blur-lg opacity-100 xl:flex" />
                </div>

                <Gradient />
              </div>
            </div>
          </div>
          <motion.div
            className="absolute left-25 bottom-95 flex justify-between items-center gap-8 border-[0.2px] border-[#413f48] p-5 bg-[#25213480] backdrop-blur-sm rounded-2xl z-1"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {icons.map((obj) => (
              <div key={obj.id}>
                <img src={obj.icon} alt="" />
              </div>
            ))}
          </motion.div>

          <motion.div
            className="absolute right-22 bottom-140 z-1 p-2 flex border-[0.2px] border-[#413f48] rounded-2xl backdrop-blur-sm bg-[#25213480]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <img
              src={image1}
              alt=""
              className="rounded-xl"
              width={60}
              height={60}
            />
            <div className="grid ml-4">
              <h1 className="text-lg text-white font-semibold pr-2">
                Code generation
              </h1>
              <div className="flex items-center gap-2">
                <img
                  src={image4}
                  alt=""
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <img
                  src={image2}
                  alt=""
                  width={20}
                  height={20}
                  className="rounded-full"
                />
                <img
                  src={image3}
                  alt=""
                  width={20}
                  height={20}
                  className="rounded-full"
                />
              </div>
            </div>
          </motion.div>
          <h3 className="text-center text-xl font-mono pb-2 text-[#ADA8C3]">
            Helping People Create Beautiful Content At
          </h3>
          <div className="flex justify-center pt-8 pb-8 items-center gap-40 ">
            {companys.map((company) => (
              <img
                src={company.img}
                key={company.id}
                width={70}
                height={70}
                alt="company's"
                className=""
              />
            ))}
          </div>
        </div>

        <BottomLine />
      </section>
    </React.Fragment>
  );
};
export default Hero;
