import React from "react";

export const Button = ({ text, clickHandler }) => {
  return (
    <div>
      <button
        type="submit"
        className="btn btn-block text-white w-[384px] h-12 rounded-[20px] bg-[#0166FF]"
        onClick={clickHandler}
      >
        {text}
      </button>
    </div>
  );
};
