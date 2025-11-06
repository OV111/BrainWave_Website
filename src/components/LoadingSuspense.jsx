import { Spin } from "antd";
const LoadingSuspense = () => {
  return (
    <div className="flex justify-center items-center ">
      <Spin size="large" tip="Loading data..." />
    </div>
  );
};

export default LoadingSuspense;
