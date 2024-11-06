import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Grid2,
  Box,
} from "@mui/material";

export const Header = (props) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Grid2 container justifyContent="center">
            <Grid2 item xs={12} md={8}>
              <Box textAlign="center" py={5}>
                <Typography variant="h2" component="h1" gutterBottom>
                  We are Student
                </Typography>
                <Typography variant="h6" component="p">
                  We are happy
                </Typography>
                <Typography variant="body1">Learn More</Typography>
              </Box>
            </Grid2>
          </Grid2>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
