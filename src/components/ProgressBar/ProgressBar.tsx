import React from "react";

type ProgressBarProps = {
  percentage: string;
  trailColor: string;
  thumbColor: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, trailColor, thumbColor }) => {
  return (
    <div className="w-[180px] h-2 rounded-sm relative" style={{ backgroundColor: trailColor }}>
      <div
        className={`h-full absolute top-0 left-0 rounded-sm opacity-50`}
        style={{ width: percentage, backgroundColor: thumbColor }}
      ></div>
    </div>
  );
};

export default ProgressBar;
