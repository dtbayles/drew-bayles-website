import './App.css';
import './styles/main.css';
import LandingPage from './pages/LandingPage';
import ParticlesBackground from "./components/ParticlesBackground";
import React from "react";
import {ThemeProvider} from "@mui/material";
import theme from "./assets/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      {/*<ParticlesBackground />*/}
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
