"use client";

export const Input = ({ name, type, onChange, placeholder, value }) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="w-[384px] h-12 rounded-lg p-4 border"
      />
    </div>
  );
};
