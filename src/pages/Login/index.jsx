import {
  Container,
  Box,
  Typography,
  Stack,
  Paper,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";
import { login } from "../../api/login";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isDataExist, setIsDataExist] = useState(false);
  const [passwordLength, setPasswordLength] = useState(false);
  const [token, setToken] = useState("");

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email.length === 0) {
      setIsEmailEmpty(true);
      return;
    }

    if (password.length < 4) {
      setPasswordLength(true);
      return;
    }

    setIsLoading(true);

    try {
      const response = await login({ email, password });
      console.log("response", response);
      setEmail("");
      setPassword("");

      if (response.status === "success") {
        setToken(response.token);
        navigate("/");
      }
    } catch (error) {
      if (error.response.data.status === "error") {
        setIsDataExist(true);
      } else {
        console.log(error);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Paper
        variant="outlined"
        sx={{
          paddingY: "50px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50px",
          marginBottom: "50px",
          maxWidth: "500px",
          marginX: "auto",
        }}
      >
        <Stack spacing={4} sx={{ width: "80%" }}>
          <Box>
            <Typography variant="h1" gutterBottom textAlign={"start"}>
              Login
            </Typography>
            <Typography variant="h3">Hi, welcome back!</Typography>
          </Box>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              marginY: 5,
            }}
            onSubmit={handleLogin}
            data-test-id="login-form"
          >
            <Typography variant="body2">Email</Typography>
            <TextField
              placeholder="Email"
              variant="outlined"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              data-testid="email-field"
              inputProps={{ "data-testid": "email-content" }}
            />
            <Typography variant="body2">Password</Typography>
            <div style={{ position: "relative" }}>
              <TextField
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                data-testid="password-field"
                inputProps={{ "data-testid": "password-content" }}
                style={{ width: "100%" }}
              />
              <IconButton
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                }}
                size="small"
                onClick={handleTogglePasswordVisibility}
                data-testid={showPassword ? "show-password" : "hide-password"}
                aria-label="toggle-password-visibility"
              >
                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </IconButton>
            </div>
            <Button
              data-testid="login-button"
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#0bda73",
                ":hover": { backgroundColor: "#0ff582" },
                boxShadow: "none",
              }}
              disable={isLoading}
            >
              {!isLoading ? "Login" : "Loading ..."}
            </Button>
          </Box>
          <Stack>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Not registered yet?{" "}
              <Link
                data-testid="create-account-link"
                to={"/signup"}
                style={{ textDecoration: "none", color: "#0bda73" }}
              >
                Create an account.
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

//

export default Login;
