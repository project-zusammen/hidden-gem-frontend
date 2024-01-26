import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const NavButton = styled(Button)(() => ({
  color: "#000000",
  textTransform: "none",
  "&:hover": {
    color: "#755D09",
  },
}));

export default function Footer() {
  const theme = useTheme();

  return (
    <footer style={{ backgroundColor: theme.palette.secondary.main, padding: "46px" }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item alignItems="center">
          <Grid container alignItems="center">
            <img src="./images/logo-hiddengem.png" alt="Logo" style={{ height: "30px", marginRight: "8px" }} />
            <div style={{ width: "4px", height: "4px", backgroundColor: "black", borderRadius: "50%", margin: "6px 8px 0 8px" }} />
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
  );
}
