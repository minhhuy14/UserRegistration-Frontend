import React, { useContext } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import ColorModeSelect from "../assets/shared_themes/ColorModeSelect";
import { AuthContext } from "../context/AuthContext";
const AppBarComponent = () => {
  const { user, isAuthenticated, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <AppBar position="static">
      {" "}
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {" "}
        <Typography variant="h6">
          <Button color="secondary" onClick={() => navigate("/")}>
            <span style={{ color: "white", fontSize: "20px" }}>Home</span>
          </Button>{" "}
        </Typography>{" "}
        {isAuthenticated ? (
          <>
            {" "}
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              {" "}
              Welcome {user.email}!{" "}
            </Typography>{" "}
            <Button color="secondary" onClick={() => navigate("/profile")}>
              {" "}
              <span style={{ color: "white", fontSize: "20px" }}>
                My Profile
              </span>
            </Button>{" "}
            <Button color="secondary" onClick={logout}>
              {" "}
              <span style={{ color: "white", fontSize: "20px" }}>Logout</span>
            </Button>{" "}
          </>
        ) : (
          <>
            {" "}
            <Typography variant="h6" sx={{ flexGrow: 1, fontSize: "24px" }}>
              {" "}
              Advanced Web Programming 21_3{" "}
            </Typography>{" "}
            <Box sx={{ display: "flex", gap: 2 }}>
              {" "}
              <Button color="secondary" onClick={() => navigate("/login")}>
                {" "}
                <span style={{ color: "white", fontSize: "20px" }}>Login</span>
              </Button>{" "}
              <Button color="secondary" onClick={() => navigate("/register")}>
                {" "}
                <span style={{ color: "white", fontSize: "20px" }}>
                  Sign Up
                </span>
              </Button>{" "}
            </Box>{" "}
          </>
        )}{" "}
        <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
        />{" "}
      </Toolbar>{" "}
    </AppBar>
  );
};
export default AppBarComponent;
