import React, { createContext, useState, useEffect, useContext } from "react";
import { Alert } from "react-native";

interface UserInterface {
  name?: string;
}

interface AuthContextInterface {
  signed: boolean;
  signIn: Function;
  signOut: Function;
  user?: UserInterface;
}

const AuthContext = createContext<AuthContextInterface>(
  {} as AuthContextInterface
);

const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getStorageItens(): Promise<void> {}
    getStorageItens();
  }, []);

  function signIn(): void {    
    setUser({
      name: "Luan Jesus",
    });
  }

  function signOut(): void {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ signed: !!user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthProvider;