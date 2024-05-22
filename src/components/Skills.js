import React from 'react';
import { ChevronRightRounded } from '@mui/icons-material';
import { Box, Card, Container, Grid, Link, Stack, Typography } from '@mui/material';
import SKILLS from '@/data/skills';

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: 'white',
        bgcolor: '#06090a',
      }}
    >
      <Container
        sx={{
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
          <Typography component="h2" variant="h4">
            My Skills
          </Typography>
          <Typography variant="body1" sx={{ color: 'grey.400' }}>
            Highly skilled and creative full-stack web developer with 2+ years of experience in crafting visually stunning and functionally robust websites and web applications.
          </Typography>
        </Box>

        <Grid container spacing={2.5}>
          {SKILLS.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Stack
                direction="column"
                color="inherit"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  p: 3,
                  height: '100%',
                  border: '1px solid',
                  borderColor: 'grey.800',
                  background: 'transparent',
                  backgroundColor: 'grey.900',
                }}
              >
                <Box sx={{ opacity: '50%' }}>{item.icon}</Box>
                <div>
                  <Typography fontWeight="medium" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.400' }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
        <Link
          component="a"
          color="inherit"
          variant="body2"
          fontWeight="bold"
          href="/resume"
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
      </Container>
    </Box>
  );
};