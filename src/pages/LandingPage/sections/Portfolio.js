import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import musiclight from "../../../assets/images/portfolio/musiclight.png";

const Portfolio = () => {
  return (
    <div className="h-screen flex flex-col items-start justify-start" style={{ backgroundColor: "#F4A261", paddingTop: "40px", paddingLeft: "40px" }}>
      <h1 className="text-3xl font-bold" style={{ marginTop: 0 }}>Portfolio</h1>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={musiclight}
          alt="title"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Card Title
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Card description goes here.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
