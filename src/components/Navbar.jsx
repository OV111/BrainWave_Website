import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";
import Button from "./Button";
import brainwave from '../assets/brainwave.svg'
const Navbar = () => {
  const location = useLocation();

  const pathToId = {
    "/": "hero",
    "/features": "features",
    "/pricing": "pricing",
    "/how-to-use": "how-to-use",
    "/roadmap": "roadmap",
  };
  useEffect(() => {
    const sectionId = pathToId[location.pathname];
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location.pathname]);

  return (
    <section id="navbar">
      <div className="flex justify-between items-center fixed z-50 w-full pl-10 bg-[#0E0C15]/50 backdrop-blur-lg text-2xl p-6">
        <div className="">
          <Link to="">
            <img src={brainwave} alt="" className="" />
          </Link>
        </div>
        <div className="flex justify-between items-center text-[#CAC6DD] text-sm gap-20 font-mono transition-colors duration-500">
          <Link to="features" className=" hover:text-white">
            FEATURES
          </Link>
          <Link to="how-to-use" className="hover:text-white">
            HOW TO USE
          </Link>
          <Link to="pricing" className=" hover:text-white">
            PRICING
          </Link>
          <Link to="roadmap" className=" hover:text-white">
            ROADMAP
          </Link>
        </div>
        <div className="flex justify-between items-center pr-5 gap-10 text-sm font-mono text-[#CAC6DD]">
          <Link to="signup" className="hover:text-white">
            NEW ACCOUNT
          </Link>
          <Link to="login" >
            <Button className="cursor-pointer  lg:flex">
              SIGN IN
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
