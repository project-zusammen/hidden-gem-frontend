import { AppBar, Toolbar, Typography, Grid, Box, Button, IconButton, Menu, MenuList, MenuItem } from "@mui/material";
import React, { useRef, useState } from "react";
import logo from "/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowDropDown from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ region }) => {
  const [navStatus, setNavStatus] = useState(false);
  const iconButtonRef = useRef();
  const openNav = () => {
    setNavStatus(true);
  };
  const closeNav = (e) => {
    setNavStatus(false);
  };
  const anchorEl = React.useRef();
  if (!region) {
    region = "Jakarta";
  }
  return (
    <AppBar position="static" sx={{ bgcolor: "neutral.light", padding: "0 46px" }}>
      <Toolbar sx={{ display: { xs: "none", md: "flex" }, height: "80px" }}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item xs={4}>
            <Box
              component="img"
              alt="logo"
              src={logo}
              sx={{
                height: 28,
                flexGrow: 1,
              }}
            />
          </Grid>

          <Grid item sx={{ flexGrow: 1 }} xs={4}>
            <Grid container spacing={1} justifyContent={"center"}>
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

          <Grid item xs={4} spacing={0} container justifyContent={"flex-end"} sx={{ display: { xs: "none", md: "flex" } }}>
            <Grid item>
              <Button
                style={{ textTransform: "none" }}
                sx={{
                  color: "neutral.dark",
                  "&:hover": {
                    backgroundColor: "primary.light",
                  },
                  textDecoration: "none",
                }}
              >
                <Typography variant="h3Bold" sx={{}}>
                  <Link to={"/login"} style={{ textDecoration: "none", color: "inherit" }}>
                    Log in
                  </Link>
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
                  <Link to={"/signup"} style={{ textDecoration: "none", color: "inherit" }}>
                    Sign up
                  </Link>
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <Box
        sx={{
          display: {
            xs: "flex",
            md: "none",
            alignItems: "center",
            justifyContent: "start",
          },
          padding: "10px",
        }}
      >
        <IconButton size="large" edge="start" color="inherit" onClick={openNav} ref={iconButtonRef}>
          <MenuIcon />
        </IconButton>
        <Menu
          anchorEl={iconButtonRef.current}
          open={Boolean(navStatus)}
          onClose={closeNav}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
          }}
        >
          <MenuList>
            <MenuItem>{"Your region: " + region}</MenuItem>
            <MenuItem>Log in</MenuItem>
            <MenuItem>Sign up</MenuItem>
          </MenuList>
        </Menu>
        <Box
          component="img"
          alt="logo"
          src={logo}
          sx={{
            height: 28,
          }}
        ></Box>
      </Box>
    </AppBar>
  );
};

Navbar.propTypes = {
  region: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  region: "Jakarta",
};

export default Navbar;
