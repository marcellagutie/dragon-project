import { ReactNode } from "react";

export interface AuthContextData {
  user?: UserProps;
  isAuthenticated: boolean;
  login: (credentials: LoginProps) => Promise<void>;
  logout: () => void;
}

export interface UserProps {
  user?: string;
  password?: string;
}

export interface LoginProps {
  user?: string;
  password?: string;
}

export interface AuthProviderProps {
  children: ReactNode;
}
