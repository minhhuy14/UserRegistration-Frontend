import React, { useEffect, useState } from "react";
import {
  Avatar,
  Container,
  Typography,
  Box,
  Paper,
  CssBaseline,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBarComponent from "../../components/AppBar";
import AppTheme from "../../assets/shared_themes/AppTheme";
import ColorModeSelect from "../../assets/shared_themes/ColorModeSelect";
import { fetchProfileInfo } from "../../services/UserServices";
const ProfilePage = (props) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

  const getProfileInfo = async () => {
    let token = JSON.parse(localStorage.getItem("user"))?.accessToken;
    console.log(token);
    if (!token) {
      navigate("/login");
    } else {
      const response = await fetchProfileInfo(token);
      console.log(response);
      if (response && response.status === 200) {
        setUserData(response.data);
      } else {
        navigate("/login");
      }
    }
  };

  useEffect(() => {
    getProfileInfo();
  }, []);

  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      <div style={{ flexGrow: 1 }}>
        <AppBarComponent />
        <Container maxWidth="md" sx={{ py: 5 }}>
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              sx={{ minHeight: "70vh" }}
            >
              <Typography variant="h3" gutterBottom>
                My Profile
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                textAlign="start"
                sx={{ minHeight: "50vh", width: "100%" }}
              >
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                  gap={1}
                  sx={{ width: "30%", marginRight: "2rem" }}
                >
                  <Avatar
                    alt="profile"
                    src="https://avatar.iran.liara.run/public"
                    sx={{ width: 160, height: 160 }}
                  />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="start"
                  gap={2}
                  sx={{ width: "70%" }}
                >
                  <Typography variant="h5">
                    <strong>Full Name:</strong> {userData.fullname}
                  </Typography>
                  <Typography variant="h5">
                    <strong>Username:</strong> {userData.username}
                  </Typography>
                  <Typography variant="h5">
                    <strong>Email:</strong> {userData.email}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Paper>
        </Container>
      </div>
    </AppTheme>
  );
};

export default ProfilePage;
