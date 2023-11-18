import React, { createContext, useState } from "react";

const UserContext = createContext({ email: "", auth: false });

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", auth: false });

  // Login updates the user data with a name parameter
  const login = (email, token) => {
    setUser((user) => ({
      email: email,
      auth: true,
    }));

    localStorage.setItem("token", token);
  };

  // Logout updates the user data to default
  const logout = () => {
    localStorage.removeItem("token");
    setUser((user) => ({
      email: "",
      auth: false,
    }));
  };
  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };
