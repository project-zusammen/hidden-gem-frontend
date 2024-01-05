// src/styles/Theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans, sans-serif',
  },
  palette: {
    primary: {
      main: '#50C878', // customize the primary color
    },
    secondary: {
      main: '#FFDF82', // customize the secondary color
    },
    success: {
      main: '#86EB57', // customize the secondary color
    },
    warning: {
      main: '#EBCA57', // customize the secondary color
    },
    danger: {
      main: '#E58C8C', // customize the secondary color
    },
    // other color customizations...
  },
  // other theme customizations...
});

export default theme;
