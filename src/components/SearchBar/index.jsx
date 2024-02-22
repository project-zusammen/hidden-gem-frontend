import React, { useState } from 'react';
import { Tab, Tabs, TextField, Box, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBarWithTabs = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleChange = (event, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '50px', marginBottom: '50px' }}>
      <Tabs value={currentTab} onChange={handleChange} aria-label="Search tabs">
        <Tab label="Food" />
        <Tab label="Hotel" />
        <Tab label="Cafe" />
        <Tab label="Outdoor" />
        <Tab label="Entertainment" />
        <Tab label="Shopping" />
      </Tabs>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        <TextField label="Search" size="small"/>
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchBarWithTabs;
