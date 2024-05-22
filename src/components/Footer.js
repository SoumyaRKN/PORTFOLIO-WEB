import React from 'react';
import { GitHub, Instagram, LinkedIn } from '@mui/icons-material';
import { Box, Container, IconButton, Link, Stack, Typography } from '@mui/material';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" mt={1}>
      {'Copyright © '}
      <Link href="https://github.com/SoumyaRKN" target="_blank">Soumya Prakash Nayak&nbsp;</Link>
      {new Date().getFullYear()}
      {/* {' Made with Material Tailwind'} */}
    </Typography>
  );
};

export default function Footer() {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: 'center', md: 'left' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          pt: { xs: 4, sm: 8 },
          width: '100%',
          borderTop: '1px solid',
          borderColor: 'divider',
        }}
      >
        <div>
          <Link color="text.secondary" href="/privacypolicy">
            Privacy Policy
          </Link>
          <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Link color="text.secondary" href="/termsofservice">
            Terms of Service
          </Link>
          <Copyright />
        </div>
        <Stack
          direction="row"
          justifyContent="left"
          spacing={1}
          useFlexGap
          sx={{
            color: 'text.secondary',
          }}
        >
          <IconButton
            color="inherit"
            href="https://www.instagram.com/n_soumya_prakash/"
            target="_blank"
            aria-label="Instagram"
            sx={{ alignSelf: 'center' }}
          >
            <Instagram />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://github.com/SoumyaRKN"
            target="_blank"
            aria-label="GitHub"
            sx={{ alignSelf: 'center' }}
          >
            <GitHub />
          </IconButton>
          <IconButton
            color="inherit"
            href="https://www.linkedin.com/in/soumya-prakash-nayak-558151261"
            target="_blank"
            aria-label="LinkedIn"
            sx={{ alignSelf: 'center' }}
          >
            <LinkedIn />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
};