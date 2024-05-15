import React from 'react';
import { Card, CardContent, CardHeader, Chip, Grid, ImageList, ImageListItem, ImageListItemBar, alpha } from '@mui/material';
import { Box, Button, Container, Link, Stack, TextField, Typography } from '@mui/material';

export default function ProjectDetails({ project }) {
  const { title, description, images, features, technologies, objective, conclusion } = project;
  return (
    <Box
      id="projectDetails"
      sx={(theme) => ({
        width: '100%',
        backgroundImage:
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #CEE5FD, #FFF)'
            : `linear-gradient(#02294F, ${alpha('#090E10', 0.0)})`,
        backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
      })}
    >
      <Container
        sx={{
          pt: { xs: 14, sm: 20 },
          pb: { xs: 8, sm: 12 },
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }, }}>
          <Typography component="h2" variant="h4" color="text.primary">{title}</Typography>
          <Typography variant="body1" color="text.secondary">{description}</Typography>
        </Box>

        <Stack spacing={2} useFlexGap sx={{ width: '100%' }}>
          {/* Images Section */}
          <ImageList
            sx={(theme) => ({
              p: 1,
              mt: { xs: 8, sm: 10 },
              alignSelf: 'center',
              width: '100%',
              height: { xs: '25vh', sm: '35vh', md: '65vh' },
              borderRadius: '10px',
              outline: '1px solid',
              outlineColor:
                theme.palette.mode === 'light'
                  ? alpha('#BFCCD9', 0.5)
                  : alpha('#9CCCFC', 0.1),
              boxShadow:
                theme.palette.mode === 'light'
                  ? `0 0 12px 8px ${alpha('#9CCCFC', 0.2)}`
                  : `0 0 24px 12px ${alpha('#033363', 0.2)}`,
            })}
          >
            {
              images.map((item, index) => (
                <ImageListItem key={index} cols={2}>
                  <img srcSet={item.image} src={item.image} alt={item.title} loading="lazy" />
                  <ImageListItemBar title={item.title} position="below" />
                </ImageListItem>
              ))
            }
          </ImageList>

          {/* Features Section */}
          <Container
            sx={{
              pt: { xs: 3, sm: 5 },
              pb: { xs: 1, sm: 2 },
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 3, sm: 6 },
            }}
          >
            <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }, }}>
              <Typography component="h2" variant="h4" color="text.primary">Features</Typography>
            </Box>

            <Grid container spacing={2}>
              {features.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex' }}>
                  <Card sx={{ width: '100%' }}>
                    <CardHeader title={item.title} />
                    <CardContent>
                      <Typography variant="body2" color="text.secondary">{item.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>

          {/* Technologies Section */}
          <Container
            sx={{
              pt: { xs: 3, sm: 5 },
              pb: { xs: 1, sm: 2 },
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 3, sm: 6 },
            }}
          >
            <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }, }}>
              <Typography component="h2" variant="h4" color="text.primary">Technologies</Typography>
            </Box>

            <Stack sx={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", gap: { xs: 1, sm: 2 }, }}>
              {technologies.map((item, index) => <Chip key={index} label={item} variant="outlined" />)}
            </Stack>
          </Container>

          {/* Objective Section */}
          <Container
            sx={{
              pt: { xs: 3, sm: 5 },
              pb: { xs: 1, sm: 2 },
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 3, sm: 6 },
            }}
          >
            <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }, }}>
              <Typography component="h2" variant="h4" color="text.primary">Objective</Typography>
            </Box>

            <Typography variant="body1" color="text.secondary" textAlign="center">{objective}</Typography>
          </Container>

          {/* Conclusion Section */}
          <Container
            sx={{
              pt: { xs: 3, sm: 5 },
              pb: { xs: 1, sm: 2 },
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: { xs: 3, sm: 6 },
            }}
          >
            <Box sx={{ width: { sm: '100%', md: '60%' }, textAlign: { sm: 'left', md: 'center' }, }}>
              <Typography component="h2" variant="h4" color="text.primary">Conclusion</Typography>
            </Box>

            <Typography variant="body1" color="text.secondary">{conclusion}</Typography>
          </Container>
        </Stack>
      </Container>
    </Box>
  );
};