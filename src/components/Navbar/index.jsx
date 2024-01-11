import { AppBar, Toolbar, Typography, Grid, Box, Button } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import React from "react";
import logo from "/images/Logo.png";

const Navbar = ({ region }) => {
  if (!region) {
    region = "Jakarta";
  }
  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "neutral.light", padding: "0 46px" }}
    >
      <Toolbar sx={{ height: "80px" }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={4}>
            <Box component="img" sx={{ height: 28 }} alt="logo" src={logo} />
          </Grid>

          <Grid item sx={{ flexGrow: 1 }} xs={4}>
            <Grid container spacing={1} justifyContent={"center"}>
              <Grid item>
                <Button
                  style={{ textTransform: "none" }}
                  sx={{
                    height: "100%",
                    color: "neutral.dark",
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <Typography variant="h3">Home</Typography>
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{ textTransform: "none" }}
                  sx={{
                    color: "neutral.dark",
                    "&:hover": {
                      backgroundColor: "primary.light",
                    },
                  }}
                >
                  <Typography variant="h3">Your region: {region}</Typography>
                  <ArrowDropDown />
                </Button>
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4} spacing={0} container justifyContent={"flex-end"}>
            <Grid item>
              <Button
                style={{ textTransform: "none" }}
                sx={{
                  color: "neutral.dark",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                <Typography variant="h3Bold" sx={{}}>
                  Log in
                </Typography>
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={{ textTransform: "none" }}
                sx={{
                  color: "neutral.dark",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                }}
              >
                <Typography variant="h3Bold" sx={{}}>
                  Sign up
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
