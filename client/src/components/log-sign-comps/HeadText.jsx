import React from "react";

export const HeadText = ({ headtext, desc }) => {
  return (
    <div className=" h-[64px] flex flex-col items-center justify-center gap-2 ">
      <div className="text-[24px] font-semibold">{headtext}</div>
      <p className="text-[16px]">{desc}</p>
    </div>
  );
};
