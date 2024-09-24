"use client";
import HeadLogoText from "../log-sign-comps/HeadLogoText";
import { useState } from "react";
import { Button } from "../log-sign-comps/LoginButton";
import { Select } from "./Select";
import { Step } from "./Step";
import { GrCurrency } from "react-icons/gr";
import axios from "axios";

export const FirstStep = ({ clickHandler }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("");
  const currencyHandler = (event) => {
    event.preventDefault();
    setSelectedCurrency(event.target.value);
    console.log(event.target.value);
  };

  const nextStep = async () => {
    if (!selectedCurrency) {
      alert("Select yout currency");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        "http://localhost:8000/currency",
        {
          currency: selectedCurrency,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      clickHandler();
    } catch (error) {
      console.log(error);
    }
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
            <GrCurrency className="w-8 h-8 text-white" />
          </div>
        </div>
        <p className="text-[24px] font-semibold">Select base currency</p>
        <Select onChange={currencyHandler} value={selectedCurrency} />
        <p className="text-[12px]">
          Your base currency should be the one you use most often. All
          transactions in other currencies will be calculated based on this one.
        </p>
        <Button text={"Confirm"} clickHandler={nextStep} />
      </div>
    </div>
  );
};
