"use client";
import { useState } from "react";
import { FaCoins } from "react-icons/fa6";
import HeadLogoText from "../log-sign-comps/HeadLogoText";
import { StepTwo } from "./StepTwo";
import { Button } from "../log-sign-comps/LoginButton";
import { Input } from "../log-sign-comps/Input";
import axios from "axios";

export const SecondStep = ({ clickHandler }) => {
  const [balance, setBalance] = useState("");

  const balanceHandler = (event) => {
    event.preventDefault();
    setBalance(event.target.value);
  };

  const nextStep = async () => {
    if (balance <= 0) {
      alert("Mungun dun 0 ees deesh baih! ");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8000/user/balance",
        { balance: balance },
        { headers: { Authorization: ` Bearer ${token}` } }
      );
      clickHandler();
      console.log("nemegsen");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center w-full h-screen justify-center border relative">
      <div className="w-[320px] h-[136px] justify-between items-center flex flex-col absolute top-[40px]">
        <HeadLogoText />
        <StepTwo />
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
          // value={balance}
          // onChange={(e) => setBalance(e.target.value)}
          onChange={balanceHandler}
          type="number"
        />
        <p className="text-[12px]">How much cash do you have in your wallet?</p>
        <Button text={"Confirm"} clickHandler={nextStep} />
      </div>
    </div>
  );
};
