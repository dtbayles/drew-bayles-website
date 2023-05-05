import './App.css';
import './styles/main.css';
import LandingPage from './pages/LandingPage';
import React from "react";
import {ThemeProvider} from "@mui/material";
import theme from "./assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
