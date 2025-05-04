import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, useMediaQuery, IconButton, Typography, Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu'; // Menu icon for mobile

const SideNav = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Check if it's mobile
  const [drawerOpen, setDrawerOpen] = useState(false); // State for controlling drawer

  // Function to toggle the drawer on mobile
  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // Close drawer on mobile when an item is clicked
  const handleItemClick = () => {
    if (isMobile) {
      setDrawerOpen(false); // Close drawer on item click for mobile
    }
  };

  return (
    <>
      {/* Hamburger menu for mobile */}
      {isMobile && (
        <IconButton
          color="inherit"
          onClick={handleDrawerToggle}
          sx={{
            position: 'fixed',
            top: '10px',
            left: '10px',
            zIndex: 1000, // Ensure the menu icon is above other content
          }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor:  'black', // Dark green color for sidebar
            color: 'white', // Text color
          },
        }}
        variant={isMobile ? 'temporary' : 'permanent'} // Mobile: temporary, Desktop: permanent
        anchor="left"
        open={isMobile ? drawerOpen : true} // Mobile: open based on state, Desktop: always open
        onClose={handleDrawerToggle} // Mobile: close on clicking outside
      >
        {/* Sidebar Top Section with Name */}
        <div style={{ padding: '20px', textAlign: 'center', fontWeight: 'bold' }}>
          <Typography variant="h6">
            ADINAKHALID | ASPIRING WEB DEVELOPER
          </Typography>
        </div>
        <Divider style={{ backgroundColor: 'white' }} /> {/* Divider for separation */}
        
        {/* Navigation Links */}
        <List>
          <ListItem button component={Link} to="/" onClick={handleItemClick}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button component={Link} to="/education" onClick={handleItemClick}>
            <ListItemText primary="Education" />
          </ListItem>
          <ListItem button component={Link} to="/projects" onClick={handleItemClick}>
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem button component={Link} to="/contact" onClick={handleItemClick}>
            <ListItemText primary="Contact" />
          </ListItem>
        </List>
      </Drawer>
    </>
  );
};

export default SideNav;
