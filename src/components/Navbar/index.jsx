import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  Box,
  Button,
  IconButton,
  Menu,
  MenuList,
  Select,
  MenuItem,
  Paper,
} from "@mui/material";
import React, { useRef, useState, useEffect } from "react";
import logo from "/images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { getRegion } from "../../api/region";

const Navbar = () => {
  const [regions, setRegions] = useState([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    (async () => {
      const data = await getRegion();
      setRegions(data.data);
    })();
  }, []);

  useEffect(() => {
    if (regions.length > 0 && !region) {
      setRegion(regions[0]["public_id"]);
    }
  }, [regions, region]);

  const [navStatus, setNavStatus] = useState(false);
  const iconButtonRef = useRef();

  const openNav = () => {
    setNavStatus(true);
  };

  const closeNav = (e) => {
    setNavStatus(false);
  };

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "neutral.light", padding: "0 46px" }}
    >
      <Toolbar sx={{ display: { xs: "none", md: "flex" }, height: "80px" }}>
        <Grid container sx={{ alignItems: "center" }}>
          <Grid item xs={4}>
            <Paper
              elevation={0}
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
            <Box sx={{ display: "flex", justifyContent: "center" }}>
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
                  value={region}
                  onChange={handleRegionChange}
                >
                  {regions.map((region) => (
                    <MenuItem key={region.public_id} value={region.public_id}>
                      {region.city}
                    </MenuItem>
                  ))}
                </Select>
              </Button>
            </Box>
          </Grid>

          <Grid
            item
            xs={4}
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
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
                <Link
                  to={"/login"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Log in
                </Link>
              </Typography>
            </Button>

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
                <Link
                  to={"/signup"}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Sign up
                </Link>
              </Typography>
            </Button>
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
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          onClick={openNav}
          ref={iconButtonRef}
        >
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
