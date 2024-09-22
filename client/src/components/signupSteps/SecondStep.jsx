"use client";
import { useState } from "react";
import { FaCoins } from "react-icons/fa6";
import HeadLogoText from "../log-sign-comps/HeadLogoText";
import { Step } from "./Step";
import { Button } from "../log-sign-comps/LoginButton";
import { Input } from "../log-sign-comps/Input";

export const SecondStep = ({ clickHandler }) => {
  const [balance, setBalance] = useState("0");

  const next = () => {
    const parsedBalance = parseFloat(balance);
    if (isNaN(parsedBalance) || parsedBalance <= 0) {
      alert("Please enter a valid cash balance.");
      return;
    }
    clickHandler(parsedBalance);
  };

  return (
    <div className="flex flex-col items-center w-full h-screen justify-center border relative">
      <div className="w-[320px] h-[136px] justify-between items-center flex flex-col absolute top-[40px]">
        <HeadLogoText />
        <Step />
      </div>
      <div className="w-[384px] h-[308px] flex flex-col justify-between items-center">
        <div className="flex items-center flex-col">
          <div className="w-12 h-12 bg-[#0166FF] flex items-center justify-center rounded-full">
            <FaCoins className="w-8 h-8 text-white" />
          </div>
        </div>
        <p className="text-[24px] font-semibold">Set up your cash balance</p>
        <Input
          placeholder={"Balance"}
          value={balance}
          onChange={(e) => setBalance(e.target.value)}
          type="number"
          aria-label="Cash balance input"
        />
        <p className="text-[12px]">How much cash do you have in your wallet?</p>
        <Button text={"Confirm"} clickHandler={next} />
      </div>
    </div>
  );
};
