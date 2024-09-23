"use client";

import axios from "axios";

import { useRouter } from "next/navigation";
import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { push } = useRouter();
  const loginHandler = async (email, password) => {
    try {
      const { data } = await axios.post(
        "http://localhost:8000/login",
        {
          email,
          password,
        }
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: `${data}`,
        //   },
        // }
      );
      console.log(data);

      const token = data.token;
      window.localStorage.setItem("token", token);
      setIsLoggedIn(true);
    } catch (error) {
      console.log(error);
      throw new Error(error.response.data);
    }
  };
  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      push("/signupdetails");
    } else {
      setIsLoggedIn(false);
      push("/login");
    }
  }, []);
  return (
    <UserContext.Provider value={{ loginHandler, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const user = useContext(UserContext);
  return user;
};
