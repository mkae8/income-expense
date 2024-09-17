"use client";

import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useAncestor = () => {
  const ancestor = useContext(UserContext);
  return ancestor;
};
