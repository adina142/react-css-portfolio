import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import styles from './Projects.module.css';

const Projects = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Projects - My Portfolio');
  }, [setPageTitle]);

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.pageTitle}>Projects</Typography>
      <div className={styles.gridWrapper}>
        {/* Project 1 */}
        <Card className={styles.card}>
          <CardMedia
            component="img"
            height="200"
            image="assests/hod.png"
            alt="TELEDOC"
            style={{ objectFit: 'cover' }}
          />
          <CardContent className={styles.cardContent}>
            <Typography variant="h6">TeleDoc</Typography>
            <Typography variant="body2" color="textSecondary">
              TeleDoc is an Android-based telemedicine application developed using Java in Android Studio. It provides a seamless platform for patients to connect with doctors for remote consultations, medical advice, and health monitoring.
            </Typography>
          </CardContent>
        </Card>

        {/* Project 2 */}
        <Card className={styles.card}>
          <CardMedia
            component="img"
            height="200"
            image="assests/txt.png"
            alt="VIM-LIKE TEXT EDITOR"
            style={{ objectFit: 'cover' }}
          />
          <CardContent className={styles.cardContent}>
            <Typography variant="h6">Vim-Like Text Editor</Typography>
            <Typography variant="body2" color="textSecondary">
              This command-line text editor replicates Vim's functionality, built using data structures like arrays, linked lists, and stacks.
            </Typography>
          </CardContent>
        </Card>

        {/* Project 3 */}
        <Card className={styles.card}>
          <CardMedia
            component="img"
            height="200"
            image="assests/chess.jpg"
            alt="CHESS GAME"
            style={{ objectFit: 'cover' }}
          />
          <CardContent className={styles.cardContent}>
            <Typography variant="h6">Chess Game</Typography>
            <Typography variant="body2" color="textSecondary">
              This Chess Game was developed as a Programming Fundamentals (PF) project, implementing key programming concepts such as loops, conditionals, functions, and object-oriented programming (OOP).
            </Typography>
          </CardContent>
        </Card>

        {/* Project 4 */}
        <Card className={styles.card}>
          <CardMedia
            component="img"
            height="200"
            image="assests/db.png"
            alt="DISTRIBUTED BACKUP SYSTEM"
            style={{ objectFit: 'cover' }}
          />
          <CardContent className={styles.cardContent}>
            <Typography variant="h6">Distributed Backup System</Typography>
            <Typography variant="body2" color="textSecondary">
              Designed and implemented a fault-tolerant database backup system across multiple nodes in a distributed computing environment.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Projects;
