import createTheme from "@mui/material/styles/createTheme";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "24px",
      fontWeight: 600,
    },
    h3: {
      fontSize: "16px",
      fontWeight: 500,
    },
    h3Bold: {
      fontSize: "16px",
      fontWeight: 700,
    },
    fontFamily: [
      '"Open Sans"',
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  palette: {
    primary: {
      main: "#50C878",
      light: "#D0E2D6",
    },
    secondary: {
      main: "#000000",
    },
    neutral: {
      main: "#849D8C",
      light: "#F6FFF9",
      dark: "#15331F",
      white: "#FEFEFE",
    },
  },
});

export default theme;
