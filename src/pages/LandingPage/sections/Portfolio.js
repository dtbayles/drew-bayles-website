import {Box, Card, CardContent, CardMedia, Grid, Typography} from '@mui/material';
import React from 'react';
import portfolio from './data/portfolio';
import GitHubIcon from '@mui/icons-material/GitHub';
import PublicIcon from '@mui/icons-material/Public';
import Link from "@mui/material/Link";

const Portfolio = () => {
  return (
    <Grid container item xs={11} spacing={3} sx={{ mx: "auto" }}>
      <Grid item xs={12}>
        <Typography variant="h2">
          Portfolio
        </Typography>
      </Grid>
      {portfolio.map((project) => (
        <Grid item key={project.title} xs={12} md={4}>
          <Card
            sx={{
              boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 0, 0, 0.2), 0 1px 4px rgba(0, 0, 0, 0.1)',
              borderRadius: 4
            }}
          >
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
              <Box display="flex" alignItems="center">
                {project.links.map(link => (
                  <Link key={link.url} href={link.url} target="_blank" rel="noopener" mr={2}>
                    {link.type === "github" && (
                      <>
                        <GitHubIcon sx={{ mr: 1 }} />
                        <Typography>View on GitHub</Typography>
                      </>
                    )}
                    {link.type === "demo" && (
                      <>
                        <PublicIcon sx={{ mr: 1 }} />
                        <Typography>View demo</Typography>
                      </>
                    )}
                  </Link>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Portfolio;
