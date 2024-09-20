"use client";
import { Bottom } from "@/components/log-sign-comps/Bottom";
import HeadLogoText from "@/components/log-sign-comps/HeadLogoText";
import { HeadText } from "@/components/log-sign-comps/HeadText";
import { Input } from "@/components/log-sign-comps/Input";
import { Button } from "@/components/log-sign-comps/LoginButton";
import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Loading } from "@/components/Loading";
import { useUser } from "@/provider/UserProvider";

export const Login = () => {
  const { push } = useRouter();
  const { loginHandler, isLoggedIn } = useUser();

  useEffect(() => {
    if (isLoggedIn) {
      push("/signupdetails");
    }
  }, [1000]);
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      await loginHandler(userData.email, userData.password);
      push("/signupdetails");
    } catch (error) {
      console.log(error);
      setError("Incorrect email or password");
    }
    setLoading(false);
  };

  return (
    <>
      {loading && <Loading />}
      <div className="flex justify-center items-center ">
        <div className="flex justify-center items-center w-screen h-screen">
          <div className="w-[384px] h-[554px] flex flex-col justify-center items-center gap-10">
            <HeadLogoText />
            <HeadText
              headtext={"Welcome Back"}
              desc={"Welcome back, Please enter your details"}
            />
            <form
              className="w-[384px] flex flex-col h-[176px] gap-4"
              onSubmit={handleSubmit}
            >
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
              <h1 className="text-red-700 flex justify-center items-center ">
                {error}
              </h1>
              <Button text={"Log In"} type="submit" />
            </form>
            <Bottom text={"Don’t have account?"} signup={"Sign Up"} />
          </div>
        </div>
        <div className="bg-[#0166FF] w-screen h-screen"></div>
      </div>
    </>
  );
};
