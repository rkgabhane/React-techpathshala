import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';

const StyledPaper = styled(Paper)({
  padding: '1rem',
  boxShadow: '0 0 10px gray'
});

const Gallery = () => {
  return (
    <section style={{ marginBottom: '2rem'}}>
      <Grid container justifyContent="center">
        <Grid item xs={12} sm={8} md={6}>
          <StyledPaper>
            <Typography variant="h5" gutterBottom>Gallery</Typography>
            <div style={{display:'flex',flexDirection:'row',gap:'10px'}}>
              <img src="https://imgs.search.brave.com/cM0iXPtwlFxocjQVRxFNEN5Lie0byaq0iG8ifbozl58/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJjYXZlLmNv/bS93cC93cDM5ODg4/NjAuanBn" alt="Rohit Sharma" style={{ width: '50%', height:'300px'}} />
              <img src="https://imgs.search.brave.com/nDpqJpeGMMd5JO_BBjklVNjKibNVecRj6qxvJhaLjtI/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTA5/MzEwNzMyNC9waG90/by9yb2hpdC1zaGFy/bWEtb2YtaW5kaWEt/Y2VsZWJyYXRlcy1h/bmQtYWNrbm93bGVk/Z2VzLXRoZS1jcm93/ZC1hZnRlci1zY29y/aW5nLWEtY2VudHVy/eS1kdXJpbmcuanBn/P3M9NjEyeDYxMiZ3/PTAmaz0yMCZjPWxk/NzJ6Uk5mZEU5QjJz/OVE5Z1NYYUFRZ3Ey/VmdGd3Z6NFBhbFNN/TnpBc0E9" alt="Rohit Sharma" style={{ width: '50%', height:'300px'}} />
            </div>
          </StyledPaper>
        </Grid>
      </Grid>
    </section>
  );
};

export default Gallery;
