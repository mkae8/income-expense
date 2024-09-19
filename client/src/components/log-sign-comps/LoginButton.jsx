import React from "react";

export const Button = ({ text, clickHandler }) => {
  return (
    <div>
      <button
        type="submit"
        className="btn  text-white w-[384px] h-12 rounded-[20px] text-[20px] font-normal bg-[#0166FF]"
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};
