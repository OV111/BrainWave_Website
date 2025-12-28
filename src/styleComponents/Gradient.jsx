import React from "react";
import gradient from "../assets/gradient.png"
export const Gradient = () => {
  return (
    <div className="absolute top-60 w-225 ml-0 h-250 pointer-events-none opacity-20 z-0">
      <img
        src={gradient}
        alt="gradient"
        className="absolute z-10"
      />
    </div>
  );
};