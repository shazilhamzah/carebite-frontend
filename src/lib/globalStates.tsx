"use client";
import { createContext, useContext, useState } from "react";

type GlobalContextType = {
  userType: string;
  setUserType: (val: string) => void;
  userTab: string;
  setUserTab: (val: string) => void;
  currentUser: any;
  setCurrentUser: (val: any) => void;
};

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [userType, setUserType] = useState("");
  const [userTab, setUserTab] = useState("Personal Information");
  const [currentUser, setCurrentUser] = useState({});

  return (
    <GlobalContext.Provider
      value={{
        userType,
        setUserType,
        userTab,
        setUserTab,
        currentUser,
        setCurrentUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context)
    throw new Error("useGlobalState must be used within GlobalProvider");
  return context;
};
