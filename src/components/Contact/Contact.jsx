import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '1rem',
  boxShadow: '0 0 10px gray'
});

const Contact = () => {
  return (
    <section style={{ marginBottom: '2rem'}}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom>Contact</Typography>
            <Typography>
              For inquiries and collaborations, you can contact Rohit Sharma at{' '}
              <a href="mailto:rohit@example.com">rohit@example.com</a>.
            </Typography>
          </StyledPaper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Contact;
