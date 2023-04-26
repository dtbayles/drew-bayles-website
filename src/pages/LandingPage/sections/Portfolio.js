import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import portfolio from './data/portfolio';

const Portfolio = () => {
  return (
    <Grid container spacing={4} mt={2}>
      <Grid item xs={12}>
        <Typography variant="h2">
          Portfolio
        </Typography>
      </Grid>
      {portfolio.map((project) => (
        <Grid item key={project.title} xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography component="h2" variant="h5" my={2}>
                {project.title}
              </Typography>
              <CardMedia
                component="img"
                sx={{ mx: 'auto' }}
                image={project.image}
                alt={project.title}
              />
              <Typography variant="subtitle1" color="text.secondary" my={2}>
                {project.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Portfolio;
