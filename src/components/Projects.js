import React, { useState } from 'react';
import { Box, Card, Chip, Container, Grid, Link, Stack, Typography } from '@mui/material';
import { ChevronRightRounded, AccessTimeRounded, ChatRounded, SmartphoneRounded, SettingsRounded, SportsEsportsRounded, GetAppRounded, AssignmentRounded, WebRounded, CloudRounded, Cloud, WhatsApp, NetworkCell, EventRepeat } from '@mui/icons-material';

const items = [
  // {
  //   icon: <NetworkCell />,
  //   title: 'Network Management System',
  //   description: 'Backend API for newtork management system.',
  //   imageLight: 'url("/projects/projects.jpg")',
  //   imageDark: 'url("/projects/projects.jpg")',
  // },
  // {
  //   icon: <EventRepeat />,
  //   title: 'ERP System',
  //   description: 'Frontend and Backend work on ERP system.',
  //   imageLight: 'url("/projects/projects.jpg")',
  //   imageDark: 'url("/projects/projects.jpg")',
  // },
  {
    icon: <WhatsApp />,
    title: 'Whatsapp Buseness Chat App',
    description: 'A chat application, designed to facilitate seamless communication with your customers.',
    imageLight: 'url("/projects/whatsapp-buseness-chat-app.png")',
    imageDark: 'url("/projects/whatsapp-buseness-chat-app.png")',
  },
  {
    icon: <SettingsRounded />,
    title: 'Whatsapp Buseness Chat App Admin Panel',
    description: 'Admin panel for managing settings and user data within the whatsapp buseness chat app.',
    imageLight: 'url("/projects/whatsapp-buseness-chat-app-admin-panel.png")',
    imageDark: 'url("/projects/whatsapp-buseness-chat-app-admin-panel.png")',
  },
  {
    icon: <SmartphoneRounded />,
    title: 'Meta Whatsapp Cloud API SDK',
    description: 'NodeJs SDK for simplifying messaging, webhooks and managing templates for Meta WhatsApp Cloud API integration.',
    imageLight: 'url("/projects/meta-whatsapp-cloud-api-sdk.png")',
    imageDark: 'url("/projects/meta-whatsapp-cloud-api-sdk.png")',
  },
  {
    icon: <ChatRounded />,
    title: 'Chat Application',
    description: 'A chat application with a sleek interface, facilitating real-time communication.',
    imageLight: 'url("/projects/chat-application.png")',
    imageDark: 'url("/projects/chat-application.png")',
  },
  {
    icon: <WebRounded />,
    title: 'Blog App',
    description: 'Personal blog platform built with Next.js, sharing insights and experiences.',
    imageLight: 'url("/projects/blog-app.png")',
    imageDark: 'url("/projects/blog-app.png")',
  },
  {
    icon: <CloudRounded />,
    title: 'Weather App',
    description: 'Weather application built with Next.js, providing real-time weather forecasts.',
    imageLight: 'url("/projects/weather-app.png")',
    imageDark: 'url("/projects/weather-app.png")',
  },
  {
    icon: <AssignmentRounded />,
    title: 'Quiz App',
    description: 'Interactive quiz application with scoring features.',
    imageLight: 'url("/projects/quiz-app.png")',
    imageDark: 'url("/projects/quiz-app.png")',
  },
  {
    icon: <GetAppRounded />,
    title: 'File Downloader',
    description: 'Simple UI enabling users to download files from URLs, enhancing file accessibility.',
    imageLight: 'url("/projects/file-downloader.png")',
    imageDark: 'url("/projects/file-downloader.png")',
  },
  {
    icon: <SportsEsportsRounded />,
    title: 'Dragon Game JS',
    description: 'An interactive web based game built with JavaScript.',
    imageLight: 'url("/projects/dragon-game.png")',
    imageDark: 'url("/projects/dragon-game.png")',
  },
  {
    icon: <AccessTimeRounded />,
    title: 'Digital Clock',
    description: 'A digital clock built from scratch, showcasing timekeeping functionality.',
    imageLight: 'url("/projects/digital-clock.png")',
    imageDark: 'url("/projects/digital-clock.png")',
  },
  {
    icon: <AccessTimeRounded />,
    title: 'Analog Clock',
    description: 'Analog clock designed during a learning session.',
    imageLight: 'url("/projects/analog-clock.png")',
    imageDark: 'url("/projects/analog-clock.png")',
  },
];

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container
      id="myProjects"
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
          My Projects
        </Typography>
        <Typography variant="body1" color="text.secondary">
          a curated showcase of digital craftsmanship and technical prowess. Here, each project serves as a testament to my dedication to excellence in full-stack web development.
        </Typography>
      </Box>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          {/* Mobile View */}
          <Grid container item gap={1} sx={{ display: { xs: 'auto', sm: 'none' } }}>
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{
                  borderColor: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'primary.light' : '';
                    }
                    return selectedItemIndex === index ? 'primary.light' : '';
                  },
                  background: (theme) => {
                    if (theme.palette.mode === 'light') {
                      return selectedItemIndex === index ? 'none' : '';
                    }
                    return selectedItemIndex === index ? 'none' : '';
                  },
                  backgroundColor: selectedItemIndex === index ? 'primary.main' : '',
                  '& .MuiChip-label': {
                    color: selectedItemIndex === index ? '#fff' : '',
                  },
                }}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: 'auto', sm: 'none' },
              mt: 4,
            }}
          >
            <Box
              sx={{
                backgroundImage: (theme) =>
                  theme.palette.mode === 'light'
                    ? items[selectedItemIndex].imageLight
                    : items[selectedItemIndex].imageDark,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                minHeight: 250,
              }}
            />
            <Box sx={{ px: 2, py: 2 }}>
              <Typography color="text.primary" variant="body2" fontWeight="bold">
                {selectedFeature.title}
              </Typography>
              <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                {selectedFeature.description}
              </Typography>
              <Link
                component="a"
                color="primary"
                variant="body2"
                fontWeight="bold"
                href="#"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  '& > svg': { transition: '0.2s' },
                  '&:hover > svg': { transform: 'translateX(2px)' },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRounded
                  fontSize="small"
                  sx={{ mt: '1px', ml: '2px' }}
                />
              </Link>
            </Box>
          </Box>

          {/* Desktop View */}
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: '100%', display: { xs: 'none', sm: 'flex' } }}
          >
            <Grid container spacing={2}>
              {items.map(({ icon, title, description, imageLight, imageDark }, index) => (
                <Grid item xs={12} md={6} key={index}>
                  {/* <Card
                    key={index}
                    variant="outlined"
                    component={Button}
                    onClick={() => handleItemClick(index)}
                    sx={{
                      p: 3,
                      height: 'fit-content',
                      width: '100%',
                      background: 'none',
                      backgroundColor:
                        selectedItemIndex === index ? 'action.selected' : undefined,
                      borderColor: (theme) => {
                        if (theme.palette.mode === 'light') {
                          return selectedItemIndex === index
                            ? 'primary.light'
                            : 'grey.200';
                        }
                        return selectedItemIndex === index ? 'primary.dark' : 'grey.800';
                      },
                    }}
                  >
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        textAlign: 'left',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: { md: 'center' },
                        gap: 2.5,
                      }}
                    >
                      <Box
                        sx={{
                          color: (theme) => {
                            if (theme.palette.mode === 'light') {
                              return selectedItemIndex === index
                                ? 'primary.main'
                                : 'grey.300';
                            }
                            return selectedItemIndex === index
                              ? 'primary.main'
                              : 'grey.700';
                          },
                        }}
                      >
                        {icon}
                      </Box>
                      <Box sx={{ textTransform: 'none' }}>
                        <Typography
                          color="text.primary"
                          variant="body2"
                          fontWeight="bold"
                        >
                          {title}
                        </Typography>
                        <Typography
                          color="text.secondary"
                          variant="body2"
                          sx={{ my: 0.5 }}
                        >
                          {description}
                        </Typography>
                        <Link
                          color="primary"
                          variant="body2"
                          fontWeight="bold"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            '& > svg': { transition: '0.2s' },
                            '&:hover > svg': { transform: 'translateX(2px)' },
                          }}
                          onClick={(event) => {
                            event.stopPropagation();
                          }}
                        >
                          <span>Learn more</span>
                          <ChevronRightRounded
                            fontSize="small"
                            sx={{ mt: '1px', ml: '2px' }}
                          />
                        </Link>
                      </Box>
                    </Box>
                  </Card> */}

                  <Box component={Card} variant="outlined">
                    <Box
                      sx={{
                        backgroundImage: (theme) => theme.palette.mode === 'light' ? imageLight : imageDark,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        minHeight: 250,
                      }}
                    />
                    <Box sx={{ px: 2, py: 2 }}>
                      <Typography color="text.primary" variant="body2" fontWeight="bold">
                        {title}
                      </Typography>
                      <Typography color="text.secondary" variant="body2" sx={{ my: 0.5 }}>
                        {description}
                      </Typography>
                      <Link
                        component="a"
                        color="primary"
                        variant="body2"
                        fontWeight="bold"
                        href="#"
                        sx={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          '& > svg': { transition: '0.2s' },
                          '&:hover > svg': { transform: 'translateX(2px)' },
                        }}
                      >
                        <span>Learn more</span>
                        <ChevronRightRounded
                          fontSize="small"
                          sx={{ mt: '1px', ml: '2px' }}
                        />
                      </Link>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};