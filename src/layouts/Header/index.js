import React, { useState } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Avatar, Box } from '@mui/material';


const Header = () => {
  const { title } = usePageTitle(); // Ensure that your context provides `title`
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    // Placeholder for logout logic
    console.log("Logout clicked");
    handleMenuClose();
  };

  return (
    <AppBar position="sticky" className="header-bar">
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography variant="h6" component="div">
          {title}
        </Typography>

        <Box>
          <IconButton onClick={handleMenuOpen} color="inherit">
            <Avatar alt="Profile" src="/assests/profile.png" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
