import React from "react";
import PlusSvg from "../components/PlusSvg";
import Button from "../components/Button";
import { collabsApps } from "../constants/data";
import { LeftCurve } from "../components/Collaboration";
import { RightCurve } from "../components/Collaboration";
const Collabs = () => {
  return (
    <section id="collabs" className="relative">
      <div className="container pt-10 lg:flex">
        <div className="hidden absolute top-[5px] right-0 left-0 bg-[#252134] h-[0.2px] xl:block"></div>
        <PlusSvg className="absolute top-[0.2px] left-[35px] z-1"></PlusSvg>
        <PlusSvg className="absolute top-[0.2px] right-[34.5px] z-1"></PlusSvg>
        <div className="hidden absolute w-[0.2px] left-10 bottom-0 top-0 bg-[#252134] xl:block"></div>
        <div className="hidden absolute w-[0.2px] right-10 bottom-0 top-0 bg-[#252134] xl:block"></div>

        {/* Left-Side */}
        <div className="relative flex flex-col lg:flex-row items-start justify-between px-6 md:px-12 lg:px-20 pt-15">
          {/* grid px-20 pt-15 */}
          <div className="flex-1 max-w-2xl mb-10 lg:mb-0 lg:pr-10">
            <h1 className="w-150 max-w-150 text-6xl pb-10 font-sans tracking-normal text-white">
              AI Chat App for seamless collaboration
            </h1>
            <ul>
              <li className="pb-4">
                <div className="flex justify-start items-center gap-5 pb-2">
                  <img src="../src/assets/check.svg" alt="" />
                  <h3 className="text-xl text-white">Seamless Integration</h3>
                </div>
                <p className="font-sans w-90 max-w-90 text-lg text-[#ADA8C3]">
                  With smart automation and top-notch security, it's the perfect
                  solution for teams looking to work smarter.
                </p>
              </li>
              <li className="flex justify-start items-center gap-5 pb-4">
                <img src="../src/assets/check.svg" alt="" />
                <h3 className="text-xl text-white">Smart Automation</h3>
              </li>
              <li className="flex justify-start items-center gap-5">
                <img src="../src/assets/check.svg" alt="" />
                <h3 className="text-xl text-white">Top-notch Security</h3>
              </li>
            </ul>
            <Button className="cursor-pointer mt-15 font-mono hover:text-white lg:flex">
              Try It Now
            </Button>
          </div>
        </div>

        {/* Right Side  */}
        {/* <div className="flex-1 flex justify-center lg:justify-center max-w-2xl mt-10 lg:mt-8"> */}
        <div className="grid grid-col-1 lg:ml-auto xl:w-[38rem] mt-15 gap-30">
          <div className="flex justify-center">
            <p className="text-[#ADA8C3] font-sans w-90 max-w-150 text-lg">
              Streamline your team's workflow with intelligent features that
              enhance productivity while keeping your data completely secure.
            </p>
          </div>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-[#252134] rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 border aspect-square border-[#252134] m-auto rounded-full ">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-[#090321] rounded-full">
                <div className="flex items-center justify-center w-full h-full border-[#252134] rounded-full">
                  <img
                    src="src/assets/brainwave-symbol.svg"
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabsApps.map((apps) => (
                <li
                  key={apps.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.4rem] origin-bottom`}
                  style={{ transform: `rotate(${apps.rotation}deg)` }}
                >
                  <div
                    className="relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-[#15131D] border border-[white]/15 rounded-xl"
                    style={{ transform: `rotate(-${apps.rotation}deg)` }}
                  >
                    <img
                      src={apps.icon}
                      alt="colabApps"
                      width={33}
                      height={33}
                      className="m-auto"
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve></LeftCurve>
            <RightCurve></RightCurve>
          </div>
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default Collabs;
