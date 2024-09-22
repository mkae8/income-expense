import { useRouter } from "next/navigation";
import HeadLogoText from "../log-sign-comps/HeadLogoText";
import { Button } from "../log-sign-comps/LoginButton";
import { MdOutlineDone } from "react-icons/md";
import { StepThree } from "./StepThree";

export const ThirdStep = () => {
  const router = useRouter();

  const clickHandler = () => {
    router.push("/dashboard");
  };

  return (
    <div className="flex flex-col items-center w-full h-screen justify-center relative">
      <div className="w-[320px] h-[136px] justify-between items-center flex flex-col absolute top-[40px]">
        <HeadLogoText />
        <StepThree />
      </div>
      <div className="w-[384px] h-[236px] flex flex-col justify-between items-center">
        <div className="flex items-center flex-col">
          <div className="w-12 h-12 bg-[#0166FF] flex items-center justify-center rounded-full">
            <MdOutlineDone className="w-8 h-8 text-white" />
          </div>
        </div>
        <p className="text-[24px] font-semibold">Good Job!</p>
        <p className="text-[12px] text-center">
          Your very first account has been created. Now continue to dashboard
          and start tracking.
        </p>
        <Button text={"Go to Dashboard"} clickHandler={clickHandler} />
      </div>
    </div>
  );
};
