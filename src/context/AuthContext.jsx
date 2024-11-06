import React, { createContext, useState, useEffect } from "react";

// Tạo context
const AuthContext = createContext();

// Tạo provider
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Hàm để đăng nhập
  const login = (userData) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  // Hàm để đăng xuất
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("user");
    if (window.location.pathname === "/profile") {
      window.location.href = "/";
    }
  };

  // Kiểm tra trạng thái đăng nhập khi component được mount
  useEffect(() => {
    // Kiểm tra cookie hoặc localStorage để lấy thông tin người dùng
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
