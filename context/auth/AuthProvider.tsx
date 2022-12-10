import { FC, PropsWithChildren, useReducer, useEffect } from "react";

import axios from "axios";

import Cookies from "js-cookie";

import { divaApi } from "../../api";
import { IUser } from "../../interfaces";
import { AuthContext, authReducer } from "./";
import { useRouter } from "next/router";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

const AUTH_INITIAL_STATE: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

export const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  useEffect(() => {
    checkToken();
  }, []);
  const router = useRouter();

  const checkToken = async () => {
    if (!Cookies.get("token")) {
      return;
    }
    try {
      const { data } = await divaApi.get("/user/validate-token");
      const { token, user } = data;
      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
    } catch (e) {
      Cookies.remove("token");
    }
  };

  const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

  const loginUser = async (
    email: string,
    password: string
  ): Promise<boolean> => {
    try {
      const { data } = await divaApi.post("/user/login", { email, password });
      const { token, user } = data;

      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return true;
    } catch (error) {
      return false;
    }
  };

  const registerUser = async (
    name: string,
    email: string,
    password: string
  ): Promise<{ hasError: boolean; message?: string }> => {
    try {
      const { data } = await divaApi.post("/user/register", {
        name,
        email,
        password,
      });
      const { token, user } = data;

      Cookies.set("token", token);
      dispatch({ type: "[Auth] - Login", payload: user });
      return { hasError: false };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message,
        };
      }
      return {
        hasError: true,
        message: "could not create user, please try again",
      };
    }
  };

  const logout = () => {
    Cookies.remove("token");
    router.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        // methods
        loginUser,
        logout,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
