import React from 'react';
import { 
  Box, 
  Typography, 
  LinearProgress,
  useTheme
} from '@mui/material';
import styles from './Skills.module.css';

const Skills = () => {
  const theme = useTheme();

  const skillsData = [
    { name: 'C++', level: 90 },
    { name: 'Java', level: 85 },
    { name: 'HTML/CSS', level: 95 },
    { name: 'Artificial Intelligence', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'UI/UX Design', level: 70 }
  ];

  return (
    <Box className={styles.skillsContainer}>
      <Typography variant="h4" className={styles.sectionTitle}>
        My Skills
      </Typography>
      
      <Box className={styles.skillsGrid}>
        {skillsData.map((skill, index) => (
          <Box key={index} className={styles.skillItem}>
            <Box className={styles.skillHeader}>
              <Typography variant="subtitle1" className={styles.skillName}>
                {skill.name}
              </Typography>
              <Typography variant="body2" className={styles.skillPercentage}>
                {skill.level}%
              </Typography>
            </Box>
            <LinearProgress
              variant="determinate"
              value={skill.level}
              className={styles.progressBar}
              sx={{
                height: 8,
                borderRadius: 4,
                backgroundColor: theme.palette.mode === 'light' 
                  ? 'rgba(62, 47, 28, 0.1)' 
                  : 'rgba(210, 180, 140, 0.1)',
                '& .MuiLinearProgress-bar': {
                  borderRadius: 4,
                  backgroundColor: theme.palette.mode === 'light' 
                    ? theme.palette.primary.main 
                    : theme.palette.secondary.main,
                  transition: 'transform 1.5s ease-out',
                }
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;