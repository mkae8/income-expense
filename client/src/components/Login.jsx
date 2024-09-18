"use client";

import { Bottom } from "@/components/log-sign-comps/Bottom";
import HeadLogoText from "@/components/log-sign-comps/HeadLogoText";
import { HeadText } from "@/components/log-sign-comps/HeadText";
import { Input } from "@/components/log-sign-comps/Input";
import { Button } from "@/components/log-sign-comps/LoginButton";

import { useState } from "react";

export const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const login = () => {
    console.log(userData);
  };
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex justify-center items-center w-[708px] h-screen">
          <div className="w-[384px] h-[554px] flex flex-col justify-center items-center gap-10">
            <HeadLogoText />
            <HeadText
              headtext={"Welcome Back"}
              desc={"Welcome back, Please enter your details"}
            />
            <form className="w-[384px] flex flex-col h-[176px] gap-4">
              <Input
                type="email"
                name="email"
                value={userData.email}
                placeholder="Email"
                onChange={handleChange}
              />
              <Input
                type="password"
                name="password"
                value={userData.password}
                placeholder="Password"
                onChange={handleChange}
              />
              <Button text={"Log In"} type="submit" clickHandler={login} />
            </form>
            <Bottom text={"Don’t have account?"} signup={"Sign Up"} />
          </div>
        </div>
        <div className="bg-[#0166FF] w-[708px] h-screen"></div>
      </div>
    </>
  );
};
