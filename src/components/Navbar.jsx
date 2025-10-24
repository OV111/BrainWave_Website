import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../index.css"
const Navbar = () => {
  return (
    <div className="flex w-full z-50 justify-between items-center bg-[#0E0C15] text-2xl backdrop-blur-sm p-6">
      <div className="">
        <Link to="/brainwave">
          <img src="src/assets/brainwave.svg" alt="" className="" />
        </Link>
      </div>
      <div className="flex justify-between items-center text-[#FFFFFF] text-lg gap-20 font-mono" >
        <Link to="/brainwave#features">FEATURES</Link>
        <Link to="/brainwave#pricing">PRICING</Link>
        <Link to="/brainwave#how-to-use">HOW TO USE</Link>
        <Link to="/brainwave#roadmap">ROADMAP</Link>
      </div>
      <div className="flex justify-between items-center pr-0 gap-10 text-lg font-mono text-[#FFFFFF]">
        <Link to="/brainwave#signup">NEW ACCOUNT</Link>
        <Button className="hidden lg:flex" href="/brainwave#login">
          SIGN IN
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
