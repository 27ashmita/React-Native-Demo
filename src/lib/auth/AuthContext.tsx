import React, { createContext, FC, useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import { DBUser } from "~/src/interfaces";

export const AuthProvider: FC = ({ children }) => {
    const [user, setUser] = useState<DBUser | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  
    useEffect(() => {
      auth().onAuthStateChanged((user) => {
        if (user == null) {
          setIsLoggedIn(false)
          return
        }
        setIsLoggedIn(true)
      })
    }, [])
  
    return (
      <AuthContext.Provider
        value={{
          user,
          isLoggedIn
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  };