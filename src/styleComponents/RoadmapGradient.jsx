import gradient from "../assets/gradient.png"
export const RoadmapGradient = () => {
  return (
    <div className="absolute top-40 w-200 ml-40 h-300 pointer-events-none opacity-20 z-0">
      <img
        src={gradient}
        alt="gradient"
        className="absolute z-10"
      />
    </div>
  );
};

export const RoadmapGradient2 = () => {
  return (
    <div className="absolute bottom-250 w-200 right-0 h-0 pointer-events-none opacity-22 z-0">
      <img
        src={gradient}
        alt="gradient"
        className="absolute z-10"
      />
    </div>
  );
};
