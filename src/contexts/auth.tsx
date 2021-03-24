import React, { createContext, useState, useEffect, useContext } from "react";

interface UserInterface {
  name?: string;
}

interface CredentialProps {
  username: string;
  password: string;
}

interface AuthContextInterface {
  signed: boolean;
  signIn: (credentials: CredentialProps) => Promise<void>;
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

  async function signIn(): Promise<void> {
    return new Promise((resolve, reject): void => {
      setTimeout(() => {
        setUser({
          name: "Luan Jesus",
        });
        resolve(null);
      }, 2000);
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
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthProvider;
