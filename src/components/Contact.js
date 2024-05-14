import React from 'react';
import { Email, GitHub, Instagram, LinkedIn, Phone } from '@mui/icons-material';
import { Box, Button, Container, TextField, Typography, Radio, Grid, FormControlLabel, FormControl, FormLabel, RadioGroup, Card } from '@mui/material';

export default function Contact() {
  return (
    <Container
      id="contact"
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
          Contact
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Whether you're a potential client with a project idea, a fellow developer eager to collaborate, or simply have a question or feedback, this section provides a direct line to initiate meaningful conversations.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card className="bg-gray-900" sx={{ minHeight: "100%", p: "1rem" }}>
            <Typography color="white" fontSize={20}>
              Contact Information
            </Typography>
            <Typography className="text-gray-500" mb={3}>
              Fill up the form and I will get back to you within 24 hours.
            </Typography>

            <Box className="flex gap-5">
              <Phone className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                +91 8908930619
              </Typography>
            </Box>
            <Box className="flex my-2 gap-5" component="a" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank">
              <Email className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white" className="mb-2">
                nsoumyaprakash@gmail.com
              </Typography>
            </Box>
            <Box className="flex my-2 gap-5" component="a" href="https://www.instagram.com/n_soumya_prakash/" target="_blank">
              <Instagram className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">n_soumya_prakash</Typography>
            </Box>
            <Box className="flex my-2 gap-5" component="a" href="https://github.com/SoumyaRKN" target="_blank">
              <GitHub className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">SoumyaRKN</Typography>
            </Box>
            <Box className="flex my-2 gap-5" component="a" href="https://www.linkedin.com/in/soumya-prakash-nayak-558151261" target="_blank">
              <LinkedIn className="h-6 w-6 text-white" />
              <Typography variant="h6" color="white">Soumya Prakash Nayak</Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <form>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  size="small"
                  variant="standard"
                  fullWidth
                  aria-label="Enter your first name"
                  placeholder="Your First Name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  size="small"
                  variant="standard"
                  fullWidth
                  aria-label="Enter your last name"
                  placeholder="Your Last Name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="email"
                  name="email"
                  label="Email"
                  size="small"
                  variant="standard"
                  fullWidth
                  aria-label="Enter your email"
                  placeholder="Your Email"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="mobile"
                  name="mobile"
                  label="Mobile Number"
                  size="small"
                  variant="standard"
                  fullWidth
                  aria-label="Enter your mobile number"
                  placeholder="Your Mobile Number"
                />
              </Grid>

              <Grid item xs={12}>
                <FormControl>
                  <FormLabel id="what-are-you-interested-in">What are you interested in?</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="what-are-you-interested-in"
                    name="what-are-you-interested-in"
                  >
                    <FormControlLabel value="Frontend Development" control={<Radio />} label="Frontend Development" />
                    <FormControlLabel value="Backend Development" control={<Radio />} label="Backend Development" />
                    <FormControlLabel value="Full Stack Development" control={<Radio />} label="Full Stack Development" />
                    <FormControlLabel value="API Integration" control={<Radio />} label="API Integration" />
                    <FormControlLabel value="Webhook Integration" control={<Radio />} label="Webhook Integration" />
                    <FormControlLabel value="Web Optimization" control={<Radio />} label="Web Optimization" />
                    <FormControlLabel value="Others" control={<Radio />} label="Others" />
                  </RadioGroup>
                </FormControl>
              </Grid>

              <Grid item xs={12}>
                <TextField
                  id="message"
                  name="message"
                  label="Message"
                  size="small"
                  variant="standard"
                  fullWidth
                  aria-label="Enter message"
                  placeholder="Enter Message"
                />
              </Grid>

              <Grid item xs={12} textAlign="end">
                <Button type="submit" color="primary" variant="contained">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Container >
  );
};