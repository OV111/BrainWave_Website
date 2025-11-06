const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[2.5rem] px-6 bg-[#252134]/20 font-mono font-2xl text-white rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      AI is generating
      <img className="w-5 h-5 ml-4" src={"src/assets/loading.png"} alt="Loading" />
    </div>
  );
};

export default Generating;
