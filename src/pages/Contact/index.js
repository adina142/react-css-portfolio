import React, { useState } from 'react';
import { Typography, TextField, Button, Box, Container } from '@mui/material';
import * as Yup from 'yup';
import { Formik } from 'formik';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import MessageIcon from '@mui/icons-material/Message';
import InputAdornment from '@mui/material/InputAdornment';

import styles from './Contact.module.css';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  message: Yup.string().required('Message is required'),
});

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    setFormStatus('Form submitted successfully!');
    resetForm();
  };

  return (
    <Container className={styles.container} maxWidth="md"> {/* Wider layout */}
    <Typography variant="h4" className={styles.pageTitle}>
  <ContactMailIcon style={{ verticalAlign: 'middle', marginRight: '0.5rem' }} />
  <span className={styles.boldItalic}>Contact</span>
</Typography>


      <Formik
        initialValues={{ name: '', email: '', message: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange, handleSubmit, errors }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <Box className={styles.formGroup}>
            <TextField
  label="Name"
  name="name"
  value={values.name}
  onChange={handleChange}
  fullWidth
  error={Boolean(errors.name)}
  helperText={errors.name}
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <PersonIcon />
      </InputAdornment>
    ),
  }}
/>
            </Box>
            <Box className={styles.formGroup}>
            <TextField
  label="Email"
  name="email"
  type="email"
  value={values.email}
  onChange={handleChange}
  fullWidth
  error={Boolean(errors.email)}
  helperText={errors.email}
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <EmailIcon />
      </InputAdornment>
    ),
  }}
/>

            </Box>
            <Box className={styles.formGroup}>
            <TextField
  label="Message"
  name="message"
  value={values.message}
  onChange={handleChange}
  fullWidth
  multiline
  rows={4}
  error={Boolean(errors.message)}
  helperText={errors.message}
  variant="outlined"
  InputProps={{
    startAdornment: (
      <InputAdornment position="start">
        <MessageIcon />
      </InputAdornment>
    ),
  }}
/>

            </Box>
            <Box className={styles.formGroup}>
            <Button type="submit" variant="contained" color="error">
                 Submit
            </Button>

            </Box>
            {formStatus && <Typography variant="body1" align="center" color="green">{formStatus}</Typography>}
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Contact;
