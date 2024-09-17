import React from "react";

export const LoginButton = ({ text }) => {
  return (
    <div>
      <button className="btn btn-block text-white w-[384px] h-12 rounded-[20px] bg-[#0166FF]">
        {text}
      </button>
    </div>
  );
};
