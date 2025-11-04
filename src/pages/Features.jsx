import React from "react";
import { features } from "../constants/data";
// import { background } from "../../../../brainwave/brainwave/src/assets";
import PlusSvg from "../components/PlusSvg";
import Arrow from "../components/Arrow";
import { Gradient } from "../styleComponents/Gradient";
const Features = () => {
  return (
    <React.Fragment>
      <section id="features">
        <div className="relative pb-20">
          <div className="hidden absolute mt-0 top-[0px] left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>

          <PlusSvg className="absolute bottom-5 top-0 left-[35px] z-1"></PlusSvg>
          <PlusSvg className="absolute bottom-0 top-0 right-[34.5px] z-1"></PlusSvg>
          <div className="hidden absolute w-[0.2px] left-10 bottom-0 top-0 bg-[#252134] xl:block"></div>
          <div className="hidden absolute w-[0.2px] right-10 bottom-0 top-0 bg-[#252134] xl:block"></div>

          <h1 className="w-200 max-w-210 mx-auto mb-20 pt-15 text-center font-sans tracking-normal text-[#FFFFFF] text-6xl ">
            Chat Smarter, Not Harder with Brainwave
          </h1>
          <div className="absolute top-5 left-35">
            <Gradient />
          </div>
          <div className="grid grid-cols-3 grid-rows-2 mx-auto w-310 gap-10 z-1">
            {features.map((feature) => (
              // <div className="relative overflow-hidden h-[330px] group pt-10 pb-8 px-10 flex flex-col justify-between text-[#CAC6DD] bg-[#0E0C15]/80 border-2 border-purple-800 rounded-3xl min-h-[330px]">

              <div className="relative overflow-hidden flex flex-col justify-between h-[330px] group pt-10 pb-8 px-10 text-[#CAC6DD] ">
                <div className="absolute inset-0 bg-cover rounded-4xl bg-center opacity-0 pointer-events-none rounded-tr-[5rem] transition-opacity duration-400 group-hover:opacity-15 bg-[url('assets/benefits/image-2.png')]"/>

                <h2 className="text-2xl min-w-full pb-0  font-sans font-bold text-[#FFFFFF]">
                  {feature.topic}
                </h2>
                <p className="text-ml pb-2">{feature.text}</p>

                <div className="absolute inset-0 transition-opacity group">
                  <img
                    src={feature.borderImg}
                    alt=""
                    className="w-full h-full "
                  />
                </div>
                <div className="flex justify-between items-center relative pt-10 gap-10 cursor-pointer">
                  <img src={feature.buttonImg} alt="" className="w-12 h-12" />
                  <button className="flex items-center text-lg font-mono text-white px-0">
                    Explore more
                    <Arrow />
                  </button>
                </div>
              </div>
              // </div>

              // <div
              //     className="absolute inset-0.5 bg-n-8"
              //     style={{ clipPath: "url(#benefits)" }}
              //   >
              //     <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
              //       {item.imageUrl && (
              //         <img
              //           src={item.imageUrl}
              //           width={380}
              //           height={362}
              //           alt={item.title}
              //           className="w-full h-full object-cover"
              //         />
              //       )}
              //     </div>
              //   </div>
            ))}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Features;
