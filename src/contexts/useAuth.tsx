import { createContext, useEffect, useState, type ReactNode } from "react";
import type { UserData } from "../components/Profile/Profile";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

type UserContextType = {
  user: UserData | null;
  isLoggedIn: () => boolean;
  logout: () => void;
};

type Props = { children: ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserData | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem("token");

      const { data } = await axios.get("http://localhost:3333/me", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setUser(data.user);
      setIsReady(true);
    };

    loadUser();
  }, []);

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate('/')
  };

  return (<UserContext.Provider value={{isLoggedIn, logout, user}}> {isReady ? children :  null}</UserContext.Provider>)
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => React.useContext(UserContext)