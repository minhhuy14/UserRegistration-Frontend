import { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import FormLabel from "@mui/material/FormLabel";
import FormControl from "@mui/material/FormControl";
import Link from "@mui/material/Link";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";
import AppTheme from "../../assets/shared_themes/AppTheme";
import SignUpContainer from "./Container";
import Card from "./Card";
import { AuthContext } from "../../context/AuthContext";

import ColorModeSelect from "../../assets/shared_themes/ColorModeSelect";
import { handleLogin } from "../../services/UserServices";
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");

  const navigate = useNavigate();
  const validateInputs = () => {
    let isValid = true;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setEmailErrorMessage("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailErrorMessage("");
    }

    if (!password || password.length < 6) {
      setPasswordErrorMessage("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    if (validateInputs() === false) {
      return;
    }

    let userData = {
      email: email,
      password: password,
    };
    try {
      let response = await handleLogin(userData);
      console.log(response);
      if (response && response.status === 200) {
        toast.success(response.data.message);
        login(response.data);
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/");
      } else if (response && response.status === 401) {
        setPasswordErrorMessage(response.data.message);
      } else if (response && response.status === 404) {
        setEmailErrorMessage(response.data.message);
      } else {
        toast.error("Something went wrong from server side");
      }
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };
  return (
    <AppTheme {...props}>
      <CssBaseline enableColorScheme />
      <ColorModeSelect sx={{ position: "fixed", top: "1rem", right: "1rem" }} />
      <SignUpContainer direction="column" justifyContent="space-between">
        <Card variant="outlined">
          <Typography
            component="h1"
            variant="h4"
            sx={{ width: "100%", fontSize: "clamp(2rem, 10vw, 2.15rem)" }}
          >
            Login
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            onKeyDown={handleKeyDown}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="email" sx={{ textAlign: "left" }}>
                Email
              </FormLabel>
              <TextField
                required
                fullWidth
                id="email"
                placeholder="example@email.com"
                name="email"
                autoComplete="email"
                variant="outlined"
                error={emailErrorMessage ? true : false}
                helperText={emailErrorMessage}
                color={emailErrorMessage ? "error" : "primary"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password" sx={{ textAlign: "left" }}>
                Password
              </FormLabel>
              <TextField
                required
                fullWidth
                name="password"
                placeholder="••••••"
                type="password"
                id="password"
                autoComplete="new-password"
                variant="outlined"
                error={passwordErrorMessage ? true : false}
                helperText={passwordErrorMessage}
                color={passwordErrorMessage ? "error" : "primary"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Button
              type="button"
              fullWidth
              variant="contained"
              onClick={handleSubmit}
            >
              Login
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Don't have an account?{" "}
              <span>
                <Link
                  href="/register"
                  variant="body2"
                  sx={{ alignSelf: "center", fontWeight: "bold" }}
                >
                  Sign up
                </Link>
              </span>
            </Typography>
            <Typography sx={{ textAlign: "center" }}>
              <span>
                <Link
                  href="/"
                  variant="body2"
                  sx={{ alignSelf: "center", fontWeight: "bold" }}
                >
                  Back to Home Page
                </Link>
              </span>
            </Typography>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
