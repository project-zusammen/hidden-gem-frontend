import React from "react";
import { TextField, Box, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Category from "../Category";

const SearchBarWithTabs = () => {
  return (
    <Box
      data-testid="search-bar"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Tabs value={currentTab} onChange={handleChange} aria-label="Search tabs">
        <Tab label="Food" />
        <Tab label="Hotel" />
        <Tab label="Cafe" />
        <Tab label="Outdoor" />
        <Tab label="Entertainment" />
        <Tab label="Shopping" />
      </Tabs>

      <Category />

      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        <TextField label="Search" size="small" data-testid="label-search" />
        <IconButton
          type="submit"
          aria-label="search"
          data-testid="search-button"
        >
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBarWithTabs;
