"use client";
import HeadLogoText from "../log-sign-comps/HeadLogoText";
import { useState } from "react";
import { Button } from "../log-sign-comps/LoginButton";
import { Select } from "./Select";
import { Step } from "./Step";
import { GrCurrency } from "react-icons/gr";
import { useRouter } from "next/navigation";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export const FirstStep = () => {
  return (
    <div className="flex flex-col items-center w-full h-screen justify-center border  relative">
      <div className="w-[320px] h-[136px] justify-between items-center flex flex-col   absolute top-[40px]">
        <HeadLogoText />
        <Step />
      </div>
      <div className="w-[384px] h-[308px]  flex flex-col justify-between items-center">
        <div className="flex items-center flex-col">
          <div className="w-12 h-12 bg-[#0166FF] flex items-center justify-center rounded-full">
            <GrCurrency className=" w-8 h-8 text-white" />
          </div>
        </div>
        <p className="text-[24px] font-semibold">Select base currency</p>
        <Select />
        <p className="text-[12px]">
          Your base currency should be the one you use most often. All
          transaction in other currencies will be calculated based on this one
        </p>
        <Button text={"Confirm"} />
      </div>
    </div>
  );
};
