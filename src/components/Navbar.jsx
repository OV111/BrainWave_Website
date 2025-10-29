import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "../index.css";
import { BottomLine } from "./BottomLine";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const pathToId = {
    "/": "navbar",
    "/features": "features",
    "/pricing": "pricing",
    "/how-to-use": "how-to-use",
    "/roadmap": "roadmap",
  };
  useEffect(() => {
    const sectionId = pathToId[location.pathname];
    if (sectionId) {
       document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      // if (element) {
      // }
    }
    console.log(location.pathname);
  }, [location.pathname]);

  // Trigger when the path changes
  // Get the current section ID from the map
  // Call scrollIntoView()

  // const scrolling = (path) => {
  //   document.getElementById(path).scrollIntoView({ behavior: "smooth" });
  // };

  return (
    <React.Fragment>
      <section id="navbar">
        <div className="flex justify-between items-center fixed z-50 w-full pl-10 bg-[#0E0C15]/50 backdrop-blur-lg text-2xl p-6">
          <div className="">
            <Link to="">
              <img src="src/assets/brainwave.svg" alt="" className="" />
            </Link>
          </div>
          <div className="flex justify-between items-center text-[#CAC6DD] text-lg gap-20 font-mono transition-colors duration-500">
            <Link
              to="features" /*  */
              // onClick={() => {
              //   scrolling();
              // }}
              className=" hover:text-white"
            >
              FEATURES
            </Link>
            <Link
              to="pricing"
              // onClick={() => {
              //   scrolling();
              // }}
              className=" hover:text-white"
            >
              PRICING
            </Link>
            <Link
              to="how-to-use"
              // onClick={() => {
              //   scrolling();
              // }}
              className="hover:text-white"
            >
              HOW TO USE
            </Link>
            <Link
              to="roadmap"
              // onClick={() => {
              //   scrolling();
              // }}
              className=" hover:text-white"
            >
              ROADMAP
            </Link>
          </div>
          <div className="flex justify-between items-center pr-5 gap-10 text-lg font-mono text-[#CAC6DD]">
            <Link to="signup" className="hover:text-white">
              NEW ACCOUNT
            </Link>
            <Link to="login">
              <Button className="cursor-pointer hover:text-white lg:flex">
                SIGN IN
              </Button>
            </Link>
          </div>
        </div>
        {/* <BottomLine/> */}
      </section>
    </React.Fragment>
  );
};

export default Navbar;
