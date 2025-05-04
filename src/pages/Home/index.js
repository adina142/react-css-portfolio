import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Box, Typography, Avatar } from '@mui/material';

const Home = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Home - My Portfolio');
  }, [setPageTitle]);

  return (
    <Box className="home-container">
      <Avatar
        alt="My Profile"
        src="/assests/profile.png" // Make sure you place profile.jpg inside public/ folder
        className="profile-picture"
      />
      <Typography variant="h4" gutterBottom>
        Welcome to My Portfolio
      </Typography>
      <Typography variant="body1">

  <span className="scroll-text">
  I am currently a Computer Science student in my 4th semester, passionate about technology and innovation. 
    With a strong academic background, I strive to enhance my programming skills and work on challenging projects. 
    I am eager to contribute to the dynamic tech industry through learning and creating meaningful solutions.
  </span>
  Explore my work and achievements!
</Typography>
    </Box>
  );
};

export default Home;
