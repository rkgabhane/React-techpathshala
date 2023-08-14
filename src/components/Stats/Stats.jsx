import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '1rem',
  boxShadow: '0 0 10px gray'
});

const Stats = () => {
  return (
    <section style={{ marginBottom: '2rem' }}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom>Career Stats</Typography>
            <ul>
              <li>Matches: 350</li>
              <li>Runs: 15000</li>
              <li>Average: 48.50</li>
            </ul>
          </StyledPaper>
    </section>
  );
};

export default Stats;
