import React, { useState } from "react";
import {
  Tab,
  Tabs,
  TextField,
  Box,
  IconButton,
  Button,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBarWithTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "50px",
        marginBottom: "50px",
      }}
    >
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="Search tabs"
        // textColor="neutral"
        // indicatorColor="neutral.dark"
      >
        <Tab label="Food" />
        <Tab label="Hotel" />
        <Tab label="Cafe" />
        <Tab label="Outdoor" />
        <Tab label="Entertainment" />
        <Tab label="Shopping" />
      </Tabs>
      <Box sx={{ display: "flex", alignItems: "center", marginTop: 2 }}>
        <TextField
          label="Search"
          size="small"
          sx={{ width: 600 }}
          InputProps={{
            sx: { borderRadius: 20, height: "45px" },
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  variant="contained"
                  sx={{ borderRadius: 20, marginRight: "-5px" }}
                >
                  Search
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};

export default SearchBarWithTabs;
