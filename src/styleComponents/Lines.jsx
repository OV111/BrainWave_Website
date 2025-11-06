import React from "react";

const LeftLines = () => {
  return (
    <div className="hidden absolute top-40 left-0 w-[92.5rem] h-[11.0625rem]  translate-y-1/2 pointer-events-none lg:block">
      <img src="src/assets/pricing/lines.svg" alt="" className="w-full" />
    </div>
  );
};

const RightLines = () => {
  return (
    <div className="hidden absolute top-40 right-0 w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none lg:block">
      <img src="src/assets/pricing/lines.svg" alt="" className="w-full" />
    </div>
  );
};

export { LeftLines, RightLines };
