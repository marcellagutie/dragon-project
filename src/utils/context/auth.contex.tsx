import { createContext } from "react";
import { toast } from "react-toastify";
import { AuthContextData, AuthProviderProps } from "../types/auth.type";

export const AuthContext = createContext({} as AuthContextData);

export const logout = () => {
  try {
    localStorage.removeItem("isAuthenticated");
  } catch (error) {
    console.error("Error while logging out", error);
    toast.error("Erro ao deslogar");
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const isAuthenticated = !!localStorage.getItem("isAuthenticated");

  const login = async () => {
    try {
      localStorage.setItem("isAuthenticated", "true");
    } catch (error) {
      console.error("Error while signing in", error);
      toast.error("Erro no login :(");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}