import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#1976d2',
        textAlign: 'center',
        padding: '10px',
        zIndex: 1300, // Keeps it above other components if necessary
      }}
    >
      <Typography variant="body2" sx={{ color: 'white', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Your Portfolio
      </Typography>
    </Box>
  );
};

export default Footer;
