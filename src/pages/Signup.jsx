import { Container, Box, Typography, Stack, Paper, TextField, Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { EyeOutlined, EyeInvisibleOutlined } from "@ant-design/icons";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
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
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 5 }}>
            <Typography variant="body2">Username</Typography>
            <TextField 
              variant="outlined" 
              onChange={(e) => setUsername(e.target.value)} 
              placeholder="Username"
              value={username} 
              data-testid="username-field" 
              inputProps={{ "data-testid": "username-content" }} 
            />
            <Typography variant="body2">Email</Typography>
            <TextField 
              variant="outlined" 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Email"
              value={email} 
              data-testid="email-field" 
              inputProps={{ "data-testid": "email-content" }} 
            />
            <Typography variant="body2">Password</Typography>
            <div style={{ position: 'relative' }}>
              <TextField
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                data-testid="password-field"
                style={{ width: '100%' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '20%',
                  right: '10px',
                  transform: 'translateY(-50%)',
                  cursor: 'pointer',
                }}
                onClick={handleTogglePasswordVisibility}
                data-testid={showPassword ? 'show-password' : 'hide-password'}
              >
                {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </div>
            </div>
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
