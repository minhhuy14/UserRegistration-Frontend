import { useState } from "react";
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

import {
  GoogleIcon,
  FacebookIcon,
} from "../../assets/shared_themes/customizations/CustomIcons";

import ColorModeSelect from "../../assets/shared_themes/ColorModeSelect";
import { registerNewAccount } from "../../services/RegisterService";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");

  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("");
  const [userNameErrorMessage, setUserNameErrorMessage] = useState("");
  const [fullNameErrorMessage, setFullNameErrorMessage] = useState("");
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

    if (!userName || userName.length < 1) {
      setUserNameErrorMessage("UserName is required.");
      isValid = false;
    } else {
      setUserNameErrorMessage("");
    }
    if (!fullName || fullName.length < 1) {
      setFullNameErrorMessage("Full name is required.");
      isValid = false;
    } else {
      setFullNameErrorMessage("");
    }

    return isValid;
  };

  const handleSubmit = async (event) => {
    if (validateInputs() === false) {
      return;
    }

    let userData = {
      fullName: fullName,
      userName: userName,
      email: email,
      password: password,
    };

    let response = await registerNewAccount(userData);
    console.log(response);
    if (response && response.status === 201) {
      toast.success("Register new account successfully");
    } else if (response && response.status === 409) {
      if (response.data.emailExist === true) {
        setEmailErrorMessage(response.data.message);
      } else if (response.data.userNameExist === true) {
        setUserNameErrorMessage(response.data.message);
      }
    } else {
      toast.error("Something went wrong from server side");
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
            Sign up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl>
              <FormLabel htmlFor="fullname" sx={{ textAlign: "left" }}>
                Full name
              </FormLabel>
              <TextField
                autoComplete="fullname"
                name="fullname"
                required
                fullWidth
                id="fullname"
                placeholder="Lionel Messi"
                color={"primary"}
                error={fullNameErrorMessage ? true : false}
                helperText={fullNameErrorMessage}
                onChange={(e) => setFullName(e.target.value)}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="username" sx={{ textAlign: "left" }}>
                User name
              </FormLabel>
              <TextField
                autoComplete="username"
                name="username"
                required
                fullWidth
                id="username"
                placeholder="user01"
                error={userNameErrorMessage ? true : false}
                helperText={userNameErrorMessage}
                color={userNameErrorMessage ? "error" : "primary"}
                onChange={(e) => setUserName(e.target.value)}
              />
            </FormControl>
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
              Sign up
            </Button>
            <Typography sx={{ textAlign: "center" }}>
              Already have an account?{" "}
              <span>
                <Link href="#" variant="body2" sx={{ alignSelf: "center" }}>
                  Sign in
                </Link>
              </span>
            </Typography>
          </Box>
          <Divider>
            <Typography sx={{ color: "text.secondary" }}>or</Typography>
          </Divider>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Google")}
              startIcon={<GoogleIcon />}
              disabled
            >
              Sign up with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              onClick={() => alert("Sign up with Facebook")}
              startIcon={<FacebookIcon />}
              disabled
            >
              Sign up with Facebook
            </Button>
          </Box>
        </Card>
      </SignUpContainer>
    </AppTheme>
  );
}
