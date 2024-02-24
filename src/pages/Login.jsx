import { Container, Box, Typography, Stack, Paper, TextField, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container maxWidth={false} style={{ paddingLeft: 0, paddingRight: 0 }}>
      <Paper elevation={2} sx={{ height: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px", maxWidth: "500px", marginX: "auto" }}>
        <Stack spacing={4} sx={{ width: "80%" }}>
          <Box>
            <Typography variant="h1" gutterBottom textAlign={"start"}>
              Login
            </Typography>
            <Typography variant="h3">Hi, welcome back!</Typography>
          </Box>
          <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2, marginY: 5 }}>
            <Typography variant="body2">Email</Typography>
            <TextField id="outlined-basic" variant="outlined" />
            <Typography variant="body2">Password</Typography>
            <TextField id="outlined-basic" type="password" variant="outlined" />
            <Button variant="contained" type="submit" sx={{ backgroundColor: "#0bda73", ":hover": { backgroundColor: "#0ff582" }, boxShadow: "none" }}>
              Log in
            </Button>
          </Box>
          <Stack>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              Not registered yet?{" "}
              <Link to={"/signup"} style={{ textDecoration: "none", color: "#0bda73" }}>
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
