import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Review from "./pages/Review";
import Homepage from "./pages/Homepage";
import { ThemeProvider } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import theme from "./styles/Theme";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/review" element={<Review />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
