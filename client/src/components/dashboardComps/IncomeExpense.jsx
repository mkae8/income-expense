"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { FaArrowDown, FaArrowUp } from "react-icons/fa6";

export const IncomeExpense = () => {
  const [balance, setBalance] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");

      try {
        const response = await axios.get("http://localhost:8000/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);

        setBalance(response.data.balance);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center items-center mt-[20px]">
      <div className="w-[1200px] h-[250px] flex justify-between items-center">
        <div className="flex flex-col relative">
          <img
            src="card.png"
            alt="Card"
            className="w-[384px] h-[216px] rounded-[18px]"
          />
          <div className="text-[24px] font-bold text-white absolute top-8 left-8">
            Geld
          </div>
          <div className="w-[108px] h-[56px] absolute left-8 top-[128px]">
            <p className="text-white opacity-70">Cash</p>
            <div className="text-[24px] font-semibold text-white">
              {balance}
            </div>
          </div>
        </div>

        <div className="w-[384px] h-[216px] border rounded-xl flex flex-col">
          <p className="h-[56px] w-[384px] px-6 py-4 font-semibold border-b">
            Your Income
          </p>

          <div className="w-[384px] h-[160px] px-6 py-4 flex flex-col justify-around">
            <div className="text-[32px] font-semibold">1,200,000,00₮</div>
            <div className="text-[16px] opacity-60">Your Income Amount</div>
            <div className="text-[16px] flex items-center gap-3">
              <div className="bg-green-500 w-6 h-6 rounded-full flex justify-center items-center">
                <FaArrowUp className="text-white w-4 h-4" />
              </div>
              32% from last month
            </div>
          </div>
        </div>

        <div className="w-[384px] h-[216px] border rounded-xl flex flex-col">
          <p className="h-[56px] w-[384px] px-6 py-4 font-semibold border-b">
            Total Expenses
          </p>

          <div className="w-[384px] h-[160px] px-6 py-4 flex flex-col justify-around">
            <div className="text-[32px] font-semibold">-1,200,000,00₮</div>
            <div className="text-[16px] opacity-60">Your Expense Amount</div>
            <div className="text-[16px] flex items-center gap-3">
              <div className="bg-red-500 w-6 h-6 rounded-full flex justify-center items-center">
                <FaArrowDown className="text-white w-4 h-4" />
              </div>
              32% from last month
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
