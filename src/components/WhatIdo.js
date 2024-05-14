import React from 'react';
import { Card, CardHeader, CardContent, Typography, Box, Container, Grid } from '@mui/material';
import { DeveloperBoard, Api, IntegrationInstructions, Webhook, Dns, Code, Visibility } from '@mui/icons-material';

const items = [
  {
    icon: <DeveloperBoard />,
    title: 'Frontend Development',
    description: 'Merging design finesse with modern frontend tech, I bring concepts to life, crafting interactive experiences that transcend imagination into interactive realities.',
  },
  {
    icon: <Api />,
    title: 'Backend Development',
    description: 'Fuelled by innovation, I excel in backend realms, pushing tech boundaries to deliver robust, scalable solutions that define digital frontiers.',
  },
  {
    icon: <IntegrationInstructions />,
    title: 'API Integration',
    description: 'Expert in bridging systems for seamless data exchange. I specialize in API integration, unlocking functionalities and enhancing connectivity.',
  },
  {
    icon: <Webhook />,
    title: 'Webhook Integration',
    description: ' Facilitating real-time app communication, I enable instant notifications, data synchronization, and automated workflows, enhancing efficiency.',
  },
  {
    icon: <Dns />,
    title: 'Server Deployment',
    description: 'Configuring, optimizing, managing security protocols and maintaining servers to ensure efficient performance and operation of web applications.',
  },
  {
    icon: <Code />,
    title: 'Web Optimization',
    description: 'Speed is paramount. I optimize websites and apps for lightning-fast performance, ensuring user satisfaction and bolstering SEO rankings.',
  },
  // {
  //   icon: <Visibility />,
  //   title: 'User-Centric Design',
  //   description: 'Seamlessly blending development with design, I create interfaces that fuse functionality with aesthetics, ensuring an enjoyable user journey.',
  // },
];

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
        {items.map((item, index) => (
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