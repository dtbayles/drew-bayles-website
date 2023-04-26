import React from 'react';
import Portfolio from "./sections/Portfolio";
import {Container} from "@mui/material";
import '../../styles/main.css';
import Skills from "./sections/Skills";
import Header from "./sections/Header";

const LandingPage = () => {
  return (
    <>
      <Header />
      <Container>
        <Skills />
        <Portfolio />
      </Container>
    </>
  );
};

export default LandingPage;
