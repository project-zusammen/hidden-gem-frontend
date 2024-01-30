import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import Homepage from "./pages/Homepage";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import theme from "./styles/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
