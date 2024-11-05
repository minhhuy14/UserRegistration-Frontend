import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Navigation = (props) => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">React Landing Page</Typography>
        <Button color="inherit" href="#features">
          Features
        </Button>
        <Button color="inherit" href="#about">
          About
        </Button>
        <Button color="inherit" href="#services">
          Services
        </Button>
        <Button color="inherit" href="#portfolio">
          Gallery
        </Button>
        <Button color="inherit" href="#testimonials">
          Testimonials
        </Button>
        <Button color="inherit" href="#team">
          Team
        </Button>
        <Button color="inherit" href="#contact">
          Contact
        </Button>
      </Toolbar>
    </AppBar>
  );
};
