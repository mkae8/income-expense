"use client";
import { Bottom } from "@/components/log-sign-comps/Bottom";
import HeadLogoText from "@/components/log-sign-comps/HeadLogoText";
import { HeadText } from "@/components/log-sign-comps/HeadText";
import { Input } from "@/components/log-sign-comps/Input";
import { Button } from "@/components/log-sign-comps/LoginButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const Signup = () => {
  const { push } = useRouter();
  const [error, setError] = useState("");
  const [userDetail, setUserDetail] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserDetail({ ...userDetail, [name]: value });
  };
  const handeSubmit = async () => {
    if (userDetail.password !== userDetail.rePassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await axios.post("http://localhost:8000/signup", {
        username: userDetail.name,
        password: userDetail.password,
        email: userDetail.email,
      });
      console.log();

      push("/login");
    } catch (error) {
      setError("error");
    }
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex  justify-center items-center w-screen h-screen ">
          <div className="w-[384px] h-[554px] flex flex-col justify-center items-center gap-10">
            <HeadLogoText />
            <HeadText
              headtext={"Create Geld account"}
              desc={"Sign up below to create your Wallet account"}
            />

            <div className="w-[384px] flex flex-col h-[304px] gap-4 ">
              <Input
                type="text"
                placeholder={"Name"}
                name="name"
                onChange={handleChange}
              />
              <Input
                type={"text"}
                placeholder={"Email"}
                name="email"
                onChange={handleChange}
              />
              <Input
                type={"password"}
                placeholder={"Password"}
                name="password"
                onChange={handleChange}
              />
              <Input
                onChange={handleChange}
                type={"password"}
                placeholder={"Re-Password"}
                name="rePassword"
              />
              <h1 className="text-red-700 flex justify-center items-center ">
                {error}
              </h1>
              <Button text={"Sign Up"} clickHandler={handeSubmit} />
            </div>
            <Bottom text={"Already have account?"} login={"Log in"} />
          </div>
        </div>
        <div className="bg-[#0166FF] w-screen h-screen"></div>
      </div>
    </>
  );
};
