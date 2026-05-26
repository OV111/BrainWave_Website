import { Spin } from "antd";
const LoadingSuspense = () => {
  return (
    <div className="flex justify-center items-center">
      <Spin size="large">
        <span className="text-[#ADA8C3] text-sm font-mono">Loading...</span>
      </Spin>
    </div>
  );
};

export default LoadingSuspense;
