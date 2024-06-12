import { createContext, useState,useContext } from "react";
import { useDebugValue } from "react";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {

  const [auth, setAuth] = useState(null);

  return <AuthContext.Provider value={{ auth, setAuth }}>
    {children}
  </AuthContext.Provider>;

}

export const useAuth = () => {
  const { auth } = useContext(AuthContext);
  useDebugValue(auth, auth => auth?.user ? "Logged In" : "Logged Out")
  return useContext(AuthContext);
}
export default AuthProvider;