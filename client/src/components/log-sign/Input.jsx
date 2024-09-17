"use client";

export const Input = ({ text, type }) => {
  return (
    <div>
      <input
        type={type}
        placeholder={text}
        className="w-[384px] h-12 rounded-lg p-4 border "
      />
    </div>
  );
};
