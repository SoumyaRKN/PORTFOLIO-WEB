"use client"

import { useState } from 'react';
import getLPTheme from "@/utility/getLPTheme";
import { CssBaseline, Box, Divider } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/*===================== Components =====================*/
import AppAppBar from '@/components/AppAppBar';
import Hero from "@/components/Hero";
import WhatIdo from "@/components/WhatIdo";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from '@/components/Contact';
import Footer from "@/components/Footer";


export default function Home() {
  const [mode, setMode] = useState('light');
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <ToastContainer newestOnTop pauseOnFocusLoss />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Hero />
      <Box sx={{ bgcolor: 'background.default' }}>
        <WhatIdo />
        <Divider />
        <Projects />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};