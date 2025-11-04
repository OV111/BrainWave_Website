import PlusSvg from "../components/PlusSvg";
import { RoadmapGradient } from "../components/RoadmapGradient";
import { RoadmapGradient2 } from "../components/RoadmapGradient";
import Button from "../components/Button";
import { Link } from "react-router-dom";
// import { BottomLine } from "../components/BottomLine";
const Roadmap = () => {
  return (
    <section id="roadmap" className="relative">
      <div className="relative pt-6">
        <div className="hidden absolute mt-0 top-[5px] bottom-0 left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
        <div className="hidden absolute w-[0.2px] left-10 bottom-0 top-0 bg-[#252134] xl:block"></div>
        <div className="hidden absolute w-[0.2px] right-10 bottom-0 top-0 bg-[#252134] xl:block"></div>
        <PlusSvg className="absolute bottom-0 top-0 left-[35px] z-1"></PlusSvg>
        <PlusSvg className="absolute bottom-0 top-0 right-[34.5px] z-1"></PlusSvg>

        <div className="relative text-center ">
          <p className="text-[#ADA8C3] font-mono text-lg mt-20 mb-2">
            [ Ready To Get Started ]
          </p>
          <h1 className="text-6xl text-white font-semibold">
            What we’re working on
          </h1>
        </div>

        <div className="flex ml-20 ">
          {/* Left Side */}
          <div className="grid">
            <div className="relative w-155 h-180 border-[#252134] border-[0.2px] rounded-2xl mt-20 mb-0 z-1">
              <img
                src="src/assets/grid.png"
                alt="bg-grid"
                className="absolute w-full h-full "
              />
              <div className="flex justify-between mx-10 pt-10 items-center relative ">
                <p className="text-lg text-white font-mono">
                  [May {new Date().getFullYear()}]
                </p>
                <p className="text-xl text-white font-mono">Done</p>
              </div>
              <img
                src="src/assets/roadmap/image-1.png"
                alt=""
                className="mt-10 "
              />
              <div className="relative ml-10">
                <h1 className="text-white text-4xl font-semibold mb-6">
                  Voice recognition
                </h1>
                <p className="text-[#ADA8C3] font-sans text-lg w-120 max-w-120">
                  Enable the chatbot to understand and respond to voice
                  commands, making it easier for users to interact with the app
                  hands-free.
                </p>
              </div>
            </div>
            <div className="relative w-155 h-180 border-[#252134] border-[0.2px] rounded-2xl mb-15 pt-0 z-1">
              <img
                src="src/assets/grid.png"
                alt="bg-grid"
                className="absolute w-full h-full"
              />
              <div className="flex justify-between mx-10 pt-10 items-center relative ">
                <p className="text-lg text-white font-mono">
                  [May {new Date().getFullYear()}]
                </p>
                <p className="text-xl text-white font-mono">Done</p>
              </div>
              <img
                src="src/assets/roadmap/image-3.png"
                alt=""
                className="mt-10 mb-8"
              />
              <div className="relative ml-10">
                <h1 className="text-4xl text-white font-semibold mb-6">
                  Chatbot customization
                </h1>
                <p className="text-lg text-[#ADA8C3] font-sans w-130 max-w-130">
                  Allow users to customize the chatbot's appearance and
                  behavior, making it more engaging and fun to interact with.
                </p>
              </div>
            </div>
            <RoadmapGradient />
          </div>
          {/* Right Side */}
          <div className="grid ">
            <div className="relative w-155 h-180 border-[#252134] border-[0.2px] rounded-2xl ml-5 mt-40 pt-0 z-1">
              <img
                src="src/assets/grid.png"
                alt="bg-grid"
                className="absolute w-full h-full"
              />
              <div className="relative flex justify-between mx-10 mt-10 items-center">
                <p className="text-white text-lg font-mono">
                  [July {new Date().getFullYear()}]
                </p>
                <p className="text-white text-lg font-mono">In Progress</p>
              </div>
              <img
                src="src/assets/roadmap/image-2.png"
                alt=""
                className="mt-10 mb-8 ml-4"
              />
              <div className="relative ml-10">
                <h1 className="text-4xl text-white font-semibold mb-6">
                  Gamification
                </h1>
                <p className="text-lg text-[#ADA8C3] font-sans w-130 max-w-130">
                  Add game-like elements, such as badges or leaderboards, to
                  incentivize users to engage with the chatbot more frequently.
                </p>
              </div>
            </div>
            {/*  */}
            <div className="relative w-155 h-180 border-[#252134] border-[0.2px] rounded-2xl ml-5 mt-5 pt-0 z-1">
              <img
                src="src/assets/grid.png"
                alt="bg-grid"
                className="absolute w-full h-full"
              />
              <div className="relative flex justify-between mx-10 mt-10">
                <p className="text-white text-lg font-mono">
                  [June {new Date().getFullYear()}]
                </p>
                <p className="text-white text-lg font-mono">In Progress</p>
              </div>
              <img
                src="src/assets/roadmap/image-4.png"
                alt=""
                className="mt-10 mb-2"
              />
              <div className="relative ml-10">
                <h1 className="text-4xl text-white font-semibold mb-6">
                  Integration with APIs
                </h1>
                <p className="text-lg text-[#ADA8C3] font-sans w-130 max-w-130">
                  Allow the chatbot to access external data sources, such as
                  weather APIs or news APIs, to provide more relevant
                  recommendations.
                </p>
              </div>
            </div>
            <RoadmapGradient2 />
          </div>
          {/* <BottomLine/> */}
        </div>

        <div className="text-center pt-15 pb-15 font-mono">
          <Button>
            <h1>Our Roadmap</h1>
          </Button>
        </div>
      </div>
      {/* Footer */}
      <div className="relative">
        <div className="hidden absolute h-[0.2px] bottom-0 left-[40px] right-[40px] top-[5px] bg-[#252134] lg:block"></div>
        <PlusSvg className="absolute bottom-0 top-0 left-[35px] z-1"></PlusSvg>
        <PlusSvg className="absolute bottom-0 top-0 right-[35px] z-1"></PlusSvg>
        <div className="absolute w-[0.2px] bottom-0 top-0 left-[40px] bg-[#252134]"></div>
        <div className="absolute w-[0.2px] bottom-0 top-0 right-[40px] bg-[#252134]"></div>
        <div className="flex justify-between mx-20 py-10">
          <div>
            <h1 className="text-[#ADA8C3] text-lg">
              © {new Date().getFullYear()} All Rights Reserved.
            </h1>
          </div>

            <ul className="flex justify-between items-center gap-5">
              <li>
                <Link to="/">
                  <img src="src/assets/socials/discord.svg" alt="" className="w-8 h-8" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="src/assets/socials/facebook.svg" alt=""  className="w-8 h-8"/>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="src/assets/socials/instagram.svg" alt=""  className="w-8 h-8"/>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="src/assets/socials/telegram.svg" alt=""  className="w-8 h-8"/>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <img src="src/assets/socials/twitter.svg" alt=""  className="w-8 h-8"/>
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
