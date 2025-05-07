import React, { useEffect } from 'react';
import { usePageTitle } from '../../context/PageTitleContext';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import ituLogo from '../../assests/itu.png';
import styles from './Education.module.css';
import punLogo from '../../assests/pun.png';
import alRazaLogo from '../../assests/al-raza.png';

const Education = () => {
  const { setPageTitle } = usePageTitle();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  useEffect(() => {
    setPageTitle('Education - My Portfolio');
  }, [setPageTitle]);

  return (
    <div className={styles.container}>
      <Typography 
        variant={isMobile ? "h5" : "h4"} 
        className={styles.pageTitle}
      >
        <SchoolIcon className={styles.titleIcon} />
        <strong>Education</strong>
      </Typography>

      <div className={styles.tableContainer}>
        {isMobile ? (
          <div className={styles.mobileCards}>
            {/* Al-Raza Card */}
            <div className={styles.educationCard}>
              <div className={styles.cardHeader}>
                <img src={alRazaLogo} alt="Al-Raza Logo" className={styles.logo} />
                <div>
                  <h3 className={styles.institution}>Al-Raza Higher Secondary School</h3>
                  <a 
                    href="https://www.alraza.edu.pk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.websiteLink}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className={styles.cardDetails}>
                <p><strong>Degree:</strong> Matriculation</p>
                <p><strong>Year:</strong> 2020</p>
              </div>
            </div>

            {/* Punjab College Card */}
            <div className={styles.educationCard}>
              <div className={styles.cardHeader}>
                <img src={punLogo} alt="Punjab College Logo" className={styles.logo} />
                <div>
                  <h3 className={styles.institution}>Punjab College for Women Fsd</h3>
                  <a 
                    href="https://www.punjab.edu.pk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.websiteLink}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className={styles.cardDetails}>
                <p><strong>Degree:</strong> Intermediate</p>
                <p><strong>Year:</strong> 2021–2022</p>
              </div>
            </div>

            {/* ITU Card */}
            <div className={styles.educationCard}>
              <div className={styles.cardHeader}>
                <img src={ituLogo} alt="ITU Logo" className={styles.logo} />
                <div>
                  <h3 className={styles.institution}>Information Technology University</h3>
                  <a 
                    href="https://itu.edu.pk" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.websiteLink}
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className={styles.cardDetails}>
                <p><strong>Degree:</strong> Bachelor in CS</p>
                <p><strong>Year:</strong> 2023–2027</p>
              </div>
            </div>
          </div>
        ) : (
          <table className={styles.educationTable}>
            <thead>
              <tr>
                <th>Institution</th>
                <th>Degree</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Box display="flex" alignItems="center">
                    <img src={alRazaLogo} alt="Al-Raza Logo" className={styles.logo} />
                    <Box ml={2}>
                      Al-Raza Higher Secondary School
                      <Box display="flex" alignItems="center" mt={1}>
                        <a
                          href="https://www.alraza.edu.pk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.websiteLink}
                        >
                          Visit Website
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </td>
                <td>Matriculation</td>
                <td>2020</td>
              </tr>
              <tr>
                <td>
                  <Box display="flex" alignItems="center">
                    <img src={punLogo} alt="Punjab College Logo" className={styles.logo} />
                    <Box ml={2}>
                      Punjab College for Women Fsd
                      <Box display="flex" alignItems="center" mt={1}>
                        <a
                          href="https://www.punjab.edu.pk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.websiteLink}
                        >
                          Visit Website
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </td>
                <td>Intermediate</td>
                <td>2021–2022</td>
              </tr>
              <tr>
                <td>
                  <Box display="flex" alignItems="center">
                    <img src={ituLogo} alt="ITU Logo" className={styles.logo} />
                    <Box ml={2}>
                      Information Technology University
                      <Box display="flex" alignItems="center" mt={1}>
                        <a
                          href="https://itu.edu.pk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.websiteLink}
                        >
                          Visit Website
                        </a>
                      </Box>
                    </Box>
                  </Box>
                </td>
                <td>Bachelor in CS</td>
                <td>2023–2027</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Education;
