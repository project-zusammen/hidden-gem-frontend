import { Container, Box, Typography, Stack, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDataExist, setIsDataExist] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [inputMinLength, setInputMinLength] = useState(false);
  const [isEmail, setIsEmail] = useState(false);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (username.length < 4) {
      setInputMinLength(true);
    }

    if (email.length === 0) {
      setIsEmail(true);
    }

    if (password.length < 4) {
      setInputMinLength(true);
    }

    setIsLoading(true);

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/user/signup`,
        {
          username: username.trim(),
          email: email.trim(),
          password: password.trim(),
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setUsername("");
      setEmail("");
      setPassword("");

      if (response.data.status === "success") {
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
      <Paper variant="outlined" sx={{ paddingY: "50px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px", maxWidth: "500px", marginX: "auto" }}>
        <Stack spacing={4} sx={{ width: "80%" }}>
          <Box>
            <Typography variant="h1" gutterBottom textAlign={"start"}>
              Create Account
            </Typography>
            <Typography variant="h3">Start your journey. Sign up today!</Typography>
          </Box>
          <Box onSubmit={handleSignUp} component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 5 }}>
            <Typography variant="body2">Username</Typography>
            <TextField variant="outlined" onChange={(e) => setUsername(e.target.value)} value={username} data-testid="username-field" inputProps={{ "data-testid": "username-content" }} />
            {inputMinLength && (
              <Typography variant="body2" sx={{ color: "red" }}>
                Username should be at least 5 characters.
              </Typography>
            )}
            <Typography variant="body2">Email</Typography>
            <TextField variant="outlined" onChange={(e) => setEmail(e.target.value)} value={email} data-testid="email-field" inputProps={{ "data-testid": "email-content" }} />
            {isEmail && (
              <Typography variant="body2" sx={{ color: "red" }}>
                Email can't be empty.
              </Typography>
            )}
            <Typography variant="body2">Password</Typography>
            <TextField type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} value={password} data-testid="password-field" inputProps={{ "data-testid": "password-content" }} />
            {inputMinLength && (
              <Typography variant="body2" sx={{ color: "red" }}>
                Password should be at least 5 characters.
              </Typography>
            )}
            <Button variant="contained" type="submit" sx={{ backgroundColor: "#0bda73", ":hover": { backgroundColor: "#0ff582" }, boxShadow: "none" }} data-testid="signup-button">
              {!isLoading ? "Sign up" : "Loading ..."}
            </Button>
            {isDataExist && (
              <Typography variant="body2" sx={{ color: "red" }}>
                Register user failed. Your email is already registered!
              </Typography>
            )}
          </Box>
          <Stack>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Not registered yet?{" "}
              <Link data-testid="login-link" to={"/login"} style={{ textDecoration: "none", color: "#0bda73" }}>
                Log in.
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default Signup;
