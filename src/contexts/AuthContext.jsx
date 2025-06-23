import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
  
    const login = (userData) => setUser(userData);
    const loginAsGuest = () => setUser("guest");
    const logout = () => setUser(null);
  
    return (
      <AuthContext.Provider value={{ user, login, loginAsGuest, logout }}>
        {children}
      </AuthContext.Provider>
    );
  };

export const useAuth = () => useContext(AuthContext);
