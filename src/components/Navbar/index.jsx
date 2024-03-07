import { AppBar, Toolbar, Typography, Grid, Box, Button, IconButton, Menu, MenuList, Select, MenuItem } from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import logo from "/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { getRegion } from "../../api/region";

const Navbar = () => {
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState('');

  useEffect(() => {
    const regionFromApi = getRegion();
    regionFromApi.then((data) => {
      setRegions(data);
    });
  }, []);

  useEffect(() => {
    if (regions.length > 0 && !region) {
      setRegion(regions[0]["public_id"]);
    }
  }
  , [regions, region]);

  const [navStatus, setNavStatus] = useState(false);
  const iconButtonRef = useRef();
  const openNav = () => {
    setNavStatus(true);
  };
  const closeNav = (e) => {
    setNavStatus(false);
  };
  const anchorEl = React.useRef();

  const handleRegionChange = (region) => {
    setRegion(region);
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
                  <Typography variant="h3">Your region:</Typography>
                  <Select
                    labelId="region-select-label"
                    id="region-select"
                    data-testid="region-select"
                    onChange={(e) => handleRegionChange(e.target.value)}
                    value={region}
                  >
                    {regions.map((region) => (
                      <MenuItem key={region.public_id} value={region.public_id}>
                        {region.city}
                      </MenuItem>
                    ))}
                  </Select>
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

export default Navbar;
