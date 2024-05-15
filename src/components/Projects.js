import React, { useState } from 'react';
import { ChevronRightRounded } from '@mui/icons-material';
import { Box, Card, Chip, Container, Grid, Link, Stack, Typography } from '@mui/material';
import PROJECTS from '@/data/projects';

export default function Projects() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = PROJECTS[selectedItemIndex];

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
            {PROJECTS.map(({ title }, index) => (
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
                    ? PROJECTS[selectedItemIndex].imageLight
                    : PROJECTS[selectedItemIndex].imageDark,
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                minHeight: {
                  '@media (max-width: 600px)': {
                    minHeight: '250px'
                  },
                  '@media (max-width: 580px)': {
                    minHeight: '240px'
                  },
                  '@media (max-width: 540px)': {
                    minHeight: '227px'
                  },
                  '@media (max-width: 520px)': {
                    minHeight: '213px'
                  },
                  '@media (max-width: 490px)': {
                    minHeight: '200px'
                  },
                  '@media (max-width: 460px)': {
                    minHeight: '186px'
                  },
                  '@media (max-width: 431px)': {
                    minHeight: '175px'
                  },
                  '@media (max-width: 415px)': {
                    minHeight: '168px'
                  },
                  '@media (max-width: 400px)': {
                    minHeight: '160px'
                  },
                  '@media (max-width: 376px)': {
                    minHeight: '150px'
                  },
                  '@media (max-width: 361px)': {
                    minHeight: '144px'
                  },
                  '@media (max-width: 345px)': {
                    minHeight: '137px'
                  },
                  '@media (max-width: 320px)': {
                    minHeight: '126px'
                  },
                  '@media (max-width: 300px)': {
                    minHeight: '117px'
                  },
                  '@media (max-width: 280px)': {
                    minHeight: '108px'
                  },
                  '@media (max-width: 260px)': {
                    minHeight: '100px'
                  },
                  '@media (max-width: 245px)': {
                    minHeight: '92px'
                  },
                  '@media (max-width: 225px)': {
                    minHeight: '84px'
                  },
                  '@media (max-width: 210px)': {
                    minHeight: '78px'
                  },
                  '@media (max-width: 200px)': {
                    minHeight: '73px'
                  },
                }
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
                href={`/project/${selectedFeature.slug}`}
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
              {PROJECTS.map(({ icon, slug, title, description, imageLight, imageDark }, index) => (
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
                        minHeight: {
                          minHeight: 250,
                          '@media (max-width: 1200px)': {
                            minHeight: '246px'
                          },
                          '@media (max-width: 1154px)': {
                            minHeight: '239px'
                          },
                          '@media (max-width: 1122px)': {
                            minHeight: '231px'
                          },
                          '@media (max-width: 1100px)': {
                            minHeight: '228px'
                          },
                          '@media (max-width: 1060px)': {
                            minHeight: '219px'
                          },
                          '@media (max-width: 1025px)': {
                            minHeight: '210px'
                          },
                          '@media (max-width: 1000px)': {
                            minHeight: '204px'
                          },
                          '@media (max-width: 970px)': {
                            minHeight: '199px'
                          },
                          '@media (max-width: 930px)': {
                            minHeight: '190px'
                          },
                          '@media (max-width: 913px)': {
                            minHeight: '186px'
                          },
                          '@media (max-width: 900px)': {
                            minHeight: '375px'
                          },
                          '@media (max-width: 875px)': {
                            minHeight: '364px'
                          },
                          '@media (max-width: 854px)': {
                            minHeight: '347px'
                          },
                          '@media (max-width: 840px)': {
                            minHeight: '348px'
                          },
                          '@media (max-width: 821px)': {
                            minHeight: '333px'
                          },
                          '@media (max-width: 800px)': {
                            minHeight: '331px'
                          },
                          '@media (max-width: 769px)': {
                            minHeight: '316px'
                          },
                          '@media (max-width: 740px)': {
                            minHeight: '308px'
                          },
                          '@media (max-width: 720px)': {
                            minHeight: '295px'
                          },
                          '@media (max-width: 690px)': {
                            minHeight: '282px'
                          },
                          '@media (max-width: 650px)': {
                            minHeight: '264px'
                          },
                          '@media (max-width: 625px)': {
                            minHeight: '253px'
                          },
                        }
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
                        href={`/project/${slug}`}
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