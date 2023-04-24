import React from 'react';
import '../../styles/main.css';
import Portfolio from "./sections/Portfolio";
import { Container } from "@mui/material";
import ParticlesBackground from "../../components/ParticlesBackground";

const LandingPage = () => {
  return (
    <>
      <div className="bg-cover bg-center flex flex-col h-screen justify-center items-center bg-purple-600">
        <ParticlesBackground />
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-2">Drew Bayles</h1>
          <h2 className="text-2xl font-semibold">Full Stack Developer</h2>
        </div>
      </div>
      <div style={{ height: "100vh", width: "100%" }}>
        <Container>
          <Portfolio />
        </Container>
      </div>
    </>
  );
};

export default LandingPage;
