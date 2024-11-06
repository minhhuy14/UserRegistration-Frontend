import React from "react";
import { Typography, Container, Box, CssBaseline } from "@mui/material";
import AppBarComponent from "../../components/AppBar";
import AppTheme from "../../assets/shared_themes/AppTheme";
import ColorModeSelect from "../../assets/shared_themes/ColorModeSelect";

const HomePage = (props) => {
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      <div style={{ flexGrow: 1 }}>
        <AppBarComponent />
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
    </AppTheme>
  );
};

export default HomePage;
