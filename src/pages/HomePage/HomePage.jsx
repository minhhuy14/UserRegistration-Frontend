import React from "react";
import {
  Typography,
  Button,
  Container,
  Box,
  AppBar,
  Toolbar,
} from "@mui/material";
import ColorModeSelect from "../../assets/shared_themes/ColorModeSelect";
const HomePage = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            HomePage
          </Typography>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/login")}
          >
            Login
          </Button>
          <Button
            color="inherit"
            onClick={() => (window.location.href = "/signup")}
          >
            Sign Up
          </Button>
        </Toolbar>
        <ColorModeSelect
          sx={{ position: "fixed", top: "1rem", right: "1rem" }}
        />
      </AppBar>
      <Container>
        <Box my={4}>
          <img
            src="https://student.hcmus.edu.vn/_next/image?url=%2Fbackground.jpg&w=3840&q=75"
            alt="Header"
            style={{ width: "100%", height: "auto" }}
          />
        </Box>
      </Container>
    </div>
  );
};

export default HomePage;
