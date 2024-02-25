import { Container, Box, Typography, Stack, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 5 }}>
            <Typography variant="body2">Username</Typography>
            <TextField variant="outlined" onChange={(e) => setUsername(e.target.value)} value={username} data-testid="username-field" inputProps={{ "data-testid": "username-content" }} />
            <Typography variant="body2">Email</Typography>
            <TextField variant="outlined" onChange={(e) => setEmail(e.target.value)} value={email} data-testid="email-field" inputProps={{ "data-testid": "email-content" }} />
            <Typography variant="body2">Password</Typography>
            <TextField type="password" variant="outlined" onChange={(e) => setPassword(e.target.value)} value={password} data-testid="password-field" inputProps={{ "data-testid": "password-content" }} />
            <Button variant="contained" type="submit" sx={{ backgroundColor: "#0bda73", ":hover": { backgroundColor: "#0ff582" }, boxShadow: "none" }} data-testid="signup-button">
              Sign up
            </Button>
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
