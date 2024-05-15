import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box, Container, Grid } from '@mui/material';
import WHATIDO from '@/data/whatIdo';

export default function WhatIdo() {
  return (
    <Container
      id="whatIdo"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 3, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: { sm: '100%', md: '60%' },
          textAlign: { sm: 'left', md: 'center' },
        }}
      >
        <Typography component="h2" variant="h4" color="text.primary">
          What I do
        </Typography>
        <Typography variant="body1" color="text.secondary">
          From frontend to backend, and everything in between, my skill set encompasses a diverse array of technologies, frameworks, and methodologies essential for building modern, responsive, and robust web applications.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {WHATIDO.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
            <Card
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                flexGrow: 1,
                p: 1,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  pr: 2,
                }}
              >
                <CardHeader
                  avatar={item.icon}
                  title={item.title}
                />
              </Box>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};