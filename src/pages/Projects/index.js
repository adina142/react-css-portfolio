import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography, Card, CardContent, CardMedia, Button } from '@mui/material';
import styles from './Projects.module.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const Projects = () => {
  const { setPageTitle } = usePageTitle();

  useEffect(() => {
    setPageTitle('Projects - My Portfolio');
  }, [setPageTitle]);

  const projects = [
    {
      title: "TeleDoc",
      description: "TeleDoc is an Android-based telemedicine application developed using Java in Android Studio. It provides a seamless platform for patients to connect with doctors for remote consultations, medical advice, and health monitoring.",
      image: "assests/hod.png",
      tags: ["Android", "Java", "Firebase"],
      links: [
        { icon: <GitHubIcon />, url: "#" },
        { icon: <LaunchIcon />, url: "#" }
      ]
    },
    {
      title: "Vim-Like Text Editor",
      description: "This command-line text editor replicates Vim's functionality, built using data structures like arrays, linked lists, and stacks.",
      image: "assests/txt.png",
      tags: ["C++", "Data Structures"],
      links: [
        { icon: <GitHubIcon />, url: "#" }
      ]
    },
    {
      title: "Chess Game",
      description: "This Chess Game was developed as a Programming Fundamentals (PF) project, implementing key programming concepts such as loops, conditionals, functions, and object-oriented programming (OOP).",
      image: "assests/chess.jpg",
      tags: ["Python", "OOP"],
      links: [
        { icon: <GitHubIcon />, url: "#" }
      ]
    },
    {
      title: "Distributed Backup System",
      description: "Designed and implemented a fault-tolerant database backup system across multiple nodes in a distributed computing environment.",
      image: "assests/db.png",
      tags: ["Java", "Distributed Systems"],
      links: [
        { icon: <GitHubIcon />, url: "#" }
      ]
    }
  ];

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.pageTitle}>My Projects</Typography>
      <div className={styles.gridWrapper}>
        {projects.map((project, index) => (
          <Card key={index} className={styles.card}>
            <CardMedia
              component="img"
              height="200"
              image={project.image}
              alt={project.title}
              className={styles.cardMedia}
            />
            <CardContent className={styles.cardContent}>
              <Typography variant="h6">{project.title}</Typography>
              <Typography variant="body2" paragraph>
                {project.description}
              </Typography>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1rem' }}>
                {project.tags.map((tag, i) => (
                  <span key={i} style={{
                    backgroundColor: '#f0e6dd',
                    color: '#6d4c41',
                    padding: '4px 8px',
                    borderRadius: '4px',
                    fontSize: '0.75rem',
                    fontWeight: '500'
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {project.links.map((link, i) => (
                  <Button
                    key={i}
                    variant="outlined"
                    size="small"
                    startIcon={link.icon}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: '#6d4c41',
                      borderColor: '#d2b48c',
                      '&:hover': {
                        backgroundColor: 'rgba(210, 180, 140, 0.1)',
                        borderColor: '#a9745f'
                      }
                    }}
                  >
                    {link.icon.type === GitHubIcon ? 'Code' : 'Demo'}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
