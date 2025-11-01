import ChatBubbleWing from "./ChatBubbleWing";
export const VideoChatMsg = () => {
  return (
    <div className="absolute top-8 left-[15.125rem] text-lg w-full max-w-[14rem] py-3 pr-2.5 pl-5 bg-[#252134] rounded-t-xl rounded-bl-xl text-white font-sans  md:max-w-[17.5rem]">
      Hey Brainwave, enhance this photo!
      <ChatBubbleWing
        className="absolute left-67 bottom-0  scale-x-120"
        pathClassName="fill-[#252134]"
      />
    </div>
  );
};