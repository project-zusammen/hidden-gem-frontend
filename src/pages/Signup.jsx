import { Container, Box, Typography, Stack, Paper, TextField, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Paper elevation={2} sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px", maxWidth: "500px", marginX: "auto" }}>
        <Stack spacing={4} sx={{ width: "80%" }}>
          <Box>
            <Typography variant="h1" gutterBottom textAlign={"start"}>
              Create Account
            </Typography>
            <Typography variant="h3">Start your journey. Sign up today!</Typography>
          </Box>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 5 }}>
            <Typography variant="body2">Username</Typography>
            <TextField variant="outlined" />
            <Typography variant="body2">Email</Typography>
            <TextField variant="outlined" />
            <Typography variant="body2">Password</Typography>
            <TextField type="password" variant="outlined" />
            <Button variant="contained" type="submit" sx={{ backgroundColor: "#0bda73", ":hover": { backgroundColor: "#0ff582" }, boxShadow: "none" }}>
              Sign up
            </Button>
          </Box>
          <Stack>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Not registered yet?{" "}
              <Link to={"/login"} style={{ textDecoration: "none", color: "#0bda73" }}>
                Log in.
              </Link>
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </Container>
  );
};

export default SignUp;
