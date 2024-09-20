"use client";

import HeadLogoText from "./log-sign-comps/HeadLogoText";

export const Loading = () => {
  return (
    <div className=" flex justify-center items-center w-screen h-screen">
      <div className="w-[172px] h-[184px] flex justify-between items-center flex-col ">
        <HeadLogoText />
        <div className="flex flex-col justify-center items-center gap-4">
          <span className="loading loading-spinner loading-lg bg-blue-500 "></span>
          <p> Түр хүлээнэ үү...</p>
        </div>
      </div>
    </div>
  );
};
