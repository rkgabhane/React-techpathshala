import React from 'react';
import { Typography, Link } from '@mui/material';
import { styled } from '@mui/system';

const StyledFooter = styled('footer')({
  backgroundColor: '#333',
  color: '#fff',
  padding: '1rem',
  textAlign: 'center',
});

const Footer = () => {
  return (
    <StyledFooter>
      <Typography>
        &copy; {new Date().getFullYear()} Rohit Sharma - Cricketer Portfolio
      </Typography>
      <Typography>
        Developed by <Link href="https://your-website.com">Rahul</Link>
      </Typography>
    </StyledFooter>
  );
};

export default Footer;
