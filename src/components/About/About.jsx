import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system'; 

const StyledPaper = styled(Paper)({
  padding: '1rem',
  boxShadow: '0 0 10px gray'
});

const About = () => {
  return (
    <section style={{ marginBottom: '2rem', marginTop:'2rem'}}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom>About Rohit Sharma</Typography>
            <Typography>
              Rohit Sharma is an Indian international cricketer. He is a right-handed
              batsman and has established himself as one of the best opening batsmen
              in the world.
            </Typography>
          </StyledPaper>
    </section>
  );
};

export default About;
