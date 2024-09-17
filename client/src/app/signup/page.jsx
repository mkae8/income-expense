"use client";

import { Bottom } from "@/components/log-sign/Bottom";
import HeadLogoText from "@/components/log-sign/HeadLogoText";
import { HeadText } from "@/components/log-sign/HeadText";
import { Input } from "@/components/log-sign/Input";
import { LoginButton } from "@/components/log-sign/LoginButton";

const Signup = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="flex  justify-center items-center w-[708px] h-[1024px] ">
        <div className="w-[384px] h-[554px] flex flex-col justify-center items-center gap-10">
          <HeadLogoText />

          <HeadText
            className="w-[311px] h-[64px] border "
            headtext={"Create Geld account"}
            desc={"Sign up below to create your Wallet account"}
          />

          <div className="w-[384px] flex flex-col h-[304px] gap-4">
            <Input text={"Name"} />
            <Input text={"Email"} />
            <Input text={"Password"} type={"password"} />
            <Input text={"Re-password"} type={"password"} />

            <LoginButton text={"Sign Up"} />
          </div>
          <Bottom text={"Already have account?"} goto={"Log in"} />
        </div>
      </div>
      <div className="bg-[#0166FF] w-[708px] h-screen"></div>
    </div>
  );
};

export default Signup;
