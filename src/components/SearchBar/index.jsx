import React from "react";
import { TextField, Box, Button, InputAdornment } from "@mui/material";
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
      <Category />
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
                  sx={{
                    borderRadius: 20,
                    position: "relative",
                    right: "-10px",
                  }}
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
