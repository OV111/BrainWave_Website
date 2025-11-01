import React from "react";
import PlusSvg from "../components/PlusSvg";
import Button from "../components/Button";
import { pricing } from "../constants/data";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <section id="pricing">
      <div className="relative">
        <div className="hidden absolute w-[0.2px] top-0 bottom-0 left-10 bg-[#252134] xl:block"></div>
        <div className="hidden absolute w-[0.2px] top-0 bottom-0 right-10 bg-[#252134] xl:block"></div>
        <PlusSvg className="absolute left-[34.5px] z-1"></PlusSvg>
        <PlusSvg className="absolute right-[34.5px] z-1"></PlusSvg>

        <img
          src="src/assets/pricing/4-small.png"
          alt=""
          width={250}
          height={250}
          className="absolute mx-147 top-30 z-1"
        />
        <img
          src="src/assets/pricing/stars.svg"
          alt=""
          className="relative mx-auto "
        />
        <div className="text-center mt-10">
          <p className="text-[#ADA8C3] font-mono text-lg mb-2">
            [ Get started with Brainwave ]
          </p>
          <h1 className="text-white font-semibold text-6xl mb-18">
            Pay once, use forever
          </h1>
        </div>

        <div className="flex border-[#252134] mx-auto w-310 rounded-2xl gap-10 h-150">
          {pricing.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between w-103 mx-auto border-[0.2px] rounded-2xl border-[#252134] [&>h4]:first:text-[#FFC876] [&>h4]:even:text-[#AC6AFF] [&>h4]:last:text-[#FF776F]"
            >
              <div className="max-h-0 [&>h4]:first:text-[#FFC876] [&>h4]:even:text-[#AC6AFF] [&>h4]:last:text-[#FF776F]">
                <h4 className="h4 text-5xl mt-8 ml-8 mb-6 font-sans text-white">
                  {card.title}
                </h4>
                <p className="mx-auto text-[#ADA8C3] font-normal text-md max-w-80">
                  {card.text}
                </p>
              </div>
              <div className="mt-30">
                <h3 className="text-7xl text-white ml-8 pb-6 font-mono font-bold">
                  {card.price}
                </h3>
                <Button className="ml-8 w-80 font-mono ">
                  {card.buttonText}
                </Button>
              </div>

              <div>
                {card.description.map((desc) => (
                  <ul
                    key={desc.id}
                    className="flex items-center mx-auto w-80 max-w-90 h-30 max-h-20"
                  >
                    <li className="flex justify-center items-center  gap-5 border-t-[0.1px] border-[#ADA8C3] pt-2 mb-10">
                      <img src="src/assets/check.svg" alt="" />
                      <p className="text-[#ADA8C3]"> {desc.text}</p>
                    </li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mb-0">
          <Link
            to="#"
            className="text-white underline text-xl font-semibold"
          >
            See The Full Details
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
