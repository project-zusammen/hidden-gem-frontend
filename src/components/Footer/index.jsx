import React from "react";
import { Typography, Button, ThemeProvider, Grid } from "@mui/material";
import { styled } from "@mui/system";
import theme from "../../styles/Theme";
const NavButton = styled(Button)(() => ({
  color: "#000000",
  textTransform: "none",
  "&:hover": {
    color: "#755D09",
  },
}));

export default function Footer() {
  return (
    <ThemeProvider theme={theme}>
      <footer
        style={{ backgroundColor: theme.palette.third.main, padding: "46px" }}
      >
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item alignItems="center">
            <Grid container alignItems="center">
              <img
                src="./images/logo-hiddengem.png"
                alt="Logo"
                style={{ height: "30px", marginRight: "8px" }}
              />
              <div
                style={{
                  width: "4px",
                  height: "4px",
                  backgroundColor: "black",
                  borderRadius: "50%",
                  margin: "6px 8px 0 8px",
                }}
              />
              <Typography variant="body2" style={{ margin: "6px 8px 0 8px" }}>
                Crafted with passion by Team Evolvy
              </Typography>
            </Grid>
          </Grid>

          <Grid item justifyContent="flex-end" alignItems="center">
            <NavButton variant="text" href="#">
              Home
            </NavButton>
            <NavButton variant="text" href="#">
              Contact Us
            </NavButton>
            <NavButton variant="text" href="#">
              About
            </NavButton>
          </Grid>
        </Grid>
      </footer>
    </ThemeProvider>
  );
}
