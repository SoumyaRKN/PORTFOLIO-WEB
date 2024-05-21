"use client"

import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import getLPTheme from '@/utility/getLPTheme';
import { CssBaseline } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, AppBar, Toolbar, Button, Container, Divider, Typography, MenuItem, Drawer } from '@mui/material';

/*===================== Components =====================*/
import ToggleColorMode from '@/components/ToggleColorMode';
import Footer from '@/components/Footer';

const logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
    margin: '0 1rem',
};

function AppAppBar({ mode, toggleColorMode }) {
    const router = useRouter();
    const currentPath = usePathname();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => setOpen(newOpen);
    const redirectToHomePage = () => router.push("/");

    return (
        <div>
            <AppBar
                position="fixed"
                sx={{
                    boxShadow: 0,
                    bgcolor: 'transparent',
                    backgroundImage: 'none',
                    mt: 2,
                }}
            >
                <Container maxWidth="lg">
                    <Toolbar
                        variant="regular"
                        sx={(theme) => ({
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            flexShrink: 0,
                            borderRadius: '999px',
                            bgcolor:
                                theme.palette.mode === 'light'
                                    ? 'rgba(255, 255, 255, 0.4)'
                                    : 'rgba(0, 0, 0, 0.4)',
                            backdropFilter: 'blur(24px)',
                            maxHeight: 40,
                            border: '1px solid',
                            borderColor: 'divider',
                            boxShadow:
                                theme.palette.mode === 'light'
                                    ? `0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)`
                                    : '0 0 1px rgba(2, 31, 59, 0.7), 1px 1.5px 2px -1px rgba(2, 31, 59, 0.65), 4px 4px 12px -2.5px rgba(2, 31, 59, 0.65)',
                        })}
                    >
                        <Box
                            sx={{
                                flexGrow: 1,
                                display: 'flex',
                                alignItems: 'center',
                                ml: '-18px',
                                px: 0,
                            }}
                        >
                            <img
                                src="/logo.svg"
                                style={logoStyle}
                                alt="Portfolio"
                            />

                            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <MenuItem
                                    onClick={redirectToHomePage}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        What I do
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={redirectToHomePage}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Projects
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={redirectToHomePage}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Skills
                                    </Typography>
                                </MenuItem>
                                <MenuItem
                                    onClick={redirectToHomePage}
                                    sx={{ py: '6px', px: '12px' }}
                                >
                                    <Typography variant="body2" color="text.primary">
                                        Contact
                                    </Typography>
                                </MenuItem>
                            </Box>
                        </Box>

                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                gap: 0.5,
                                alignItems: 'center',
                            }}
                        >
                            <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                            <Button
                                color="primary"
                                variant="outlined"
                                size="small"
                                component="a"
                                href={currentPath === "/resume" ? "/resume.pdf" : "/resume"}
                                target={currentPath === "/resume" ? "_blank" : "_self"}
                            >
                                Resume
                            </Button>
                        </Box>

                        <Box sx={{ display: { sm: '', md: 'none' } }}>
                            <Button
                                variant="text"
                                color="primary"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                                sx={{ minWidth: '30px', p: '4px' }}
                            >
                                <MenuIcon />
                            </Button>
                            <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                                <Box
                                    sx={{
                                        minWidth: '60dvw',
                                        p: 2,
                                        backgroundColor: 'background.paper',
                                        flexGrow: 1,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'end',
                                            flexGrow: 1,
                                        }}
                                    >
                                        <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
                                    </Box>
                                    <MenuItem onClick={redirectToHomePage}>
                                        What I do
                                    </MenuItem>
                                    <MenuItem onClick={redirectToHomePage}>
                                        Projects
                                    </MenuItem>
                                    <MenuItem onClick={redirectToHomePage}>
                                        Skills
                                    </MenuItem>
                                    <MenuItem onClick={redirectToHomePage}>
                                        Contact
                                    </MenuItem>

                                    <Divider />
                                    <MenuItem>
                                        <Button
                                            color="primary"
                                            variant="outlined"
                                            component="a"
                                            href={currentPath === "/resume" ? "/resume.pdf" : "/resume"}
                                            target={currentPath === "/resume" ? "_blank" : "_self"}
                                            sx={{ width: '100%' }}
                                        >
                                            Resume
                                        </Button>
                                    </MenuItem>
                                </Box>
                            </Drawer>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
};

AppAppBar.propTypes = {
    mode: PropTypes.oneOf(['dark', 'light']).isRequired,
    toggleColorMode: PropTypes.func.isRequired,
};

const Layout = ({ children }) => {
    const [mode, setMode] = useState('light');
    const LPtheme = createTheme(getLPTheme(mode));

    const toggleColorMode = () => {
        setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
    };

    return (
        <ThemeProvider theme={LPtheme}>
            <CssBaseline />
            <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
            {children}
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;