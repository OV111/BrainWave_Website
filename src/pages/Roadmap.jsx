import PlusSvg from "../components/PlusSvg";
const Roadmap = () => {
  return (
    <section id="roadmap">
      <div className="relative">

        <div className="hidden absolute mt-0 top-[0px] left-0 right-0 h-[0.2px] bg-[#252134] pointer-events-none xl:block"></div>
        <PlusSvg className="absolute bottom-5 top-0 left-[35px] z-1"></PlusSvg>
        <PlusSvg className="absolute bottom-0 top-0 right-[34.5px] z-1"></PlusSvg>
        <div className="hidden absolute w-[0.2px] left-10 bottom-0 top-0 bg-[#252134] xl:block"></div>
        <div className="hidden absolute w-[0.2px] right-10 bottom-0 top-0 bg-[#252134] xl:block"></div>

<div className="text-center ">

        <p className="text-[#ADA8C3] font-mono text-lg mt-20 mb-2">
          [ Ready To Get Started ]
        </p>
        <h1 className="text-6xl text-white font-semibold">
          What we’re working on
        </h1>
</div>
      </div>
    </section>
  );
};

export default Roadmap;
