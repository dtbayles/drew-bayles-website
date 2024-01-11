import React from 'react';
import Portfolio from "./sections/Portfolio";
import {Card} from "@mui/material";
import '../../styles/main.css';
import Skills from "./sections/Skills";
import Header from "./sections/Header";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Resume from "./sections/Resume";
import Contact from "./sections/Contact";

const LandingPage = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      <div className="hidden md:block w-1/5" style={{backgroundColor: '#202226'}}>
        <Navbar/>
      </div>
      <div className="w-full md:w-4/5" style={{backgroundColor: '#202226'}}>
        <Header/>
        <Card
          sx={{
            p: 2,
            mx: {xs: 2, lg: 3},
            mt: 0,
            mb: 4,
            backgroundColor: '#2D3035',
          }}
        >
          <Skills/>
          <Portfolio/>
          <Resume/>
          <Contact/>
        </Card>
        <Footer/>
      </div>
    </div>
  );
};


export default LandingPage;
