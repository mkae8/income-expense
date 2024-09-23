import { FaPlus } from "react-icons/fa6";

export const Header = () => {
  return (
    <div className="w-[1440px] px-[120px] py-[16px]px-[120px] py-[16px] flex justify-between items-center">
      <div className="w-[225px] h-10  flex justify-between items-center">
        <img
          src="vector.png"
          alt=""
          className="h-10 w-10 object-contain p-[6px]"
        />

        <p className="text-[16px]">Dashboard</p>
        <p className="text-[16px]">Records</p>
      </div>
      <div className=" w-[163px] h-10 flex items-center justify-between">
        <div className="w-[99px] h-8 bg-blue-600 p-2 text-white text-[16px] rounded-3xl flex items-center justify-center gap-2 ">
          <FaPlus />
          Record
        </div>
        <div className="avatar">
          <div className="w-10 h-10 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};
