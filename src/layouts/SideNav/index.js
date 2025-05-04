import React, { useState } from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  IconButton,
  Typography,
  Divider,
  Box
} from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import {
  Home as HomeIcon,
  School as EducationIcon,
  Code as ProjectsIcon,
  Email as ContactIcon
} from '@mui/icons-material';


const SideNav = () => {
  const isMobile = useMediaQuery('(max-width:600px)');
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const navItems = [
    { text: 'Home', path: '/', icon: <HomeIcon /> },
    { text: 'Education', path: '/education', icon: <EducationIcon /> },
    { text: 'Projects', path: '/projects', icon: <ProjectsIcon /> },
    { text: 'Contact', path: '/contact', icon: <ContactIcon /> }
  ];

  return (
    <>
      {isMobile && (
        <IconButton
          className="mobile-menu-button"
          onClick={handleDrawerToggle}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? 'temporary' : 'permanent'}
        open={isMobile ? drawerOpen : true}
        onClose={handleDrawerToggle}
      >
        <div className="sidenav-container">
          <div className="sidenav-header">
            <Typography className="sidenav-title">
              ADINAKHALID
            </Typography>
            <Typography className="sidenav-subtitle">
              ASPIRING WEB DEVELOPER
            </Typography>
          </div>

          <Divider className="sidenav-divider" />

          <List className="sidenav-list">
            {navItems.map((item) => (
              <ListItem
                key={item.text}
                component={Link}
                to={item.path}
                className={`sidenav-list-item ${location.pathname === item.path ? 'selected' : ''}`}
                onClick={() => isMobile && setDrawerOpen(false)}
              >
                <ListItemIcon className="sidenav-icon">
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text} 
                  primaryTypographyProps={{ className: 'sidenav-item-text' }}
                />
                <div className="sidenav-indicator" />
              </ListItem>
            ))}
          </List>

          <div className="sidenav-footer">
            <Typography className="sidenav-copyright">
              © {new Date().getFullYear()} AdinaKhalid
            </Typography>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default SideNav;
