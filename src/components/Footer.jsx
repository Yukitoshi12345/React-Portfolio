// import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

function Footer() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#1976d2', marginTop: 'auto' }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, textAlign: 'center', padding: 2 }}>
            <Typography variant="body1" sx={{ color: '#fff' }}>
              &copy; {new Date().getFullYear()} Yukitoshi Imaizumi-Zhou. All
              rights reserved.
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Footer;
