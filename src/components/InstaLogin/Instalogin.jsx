import React from 'react';
import { Container, Paper, TextField, Button, Typography, CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import InstagramLogo from './instagram_logo.png'; // Replace with your Instagram logo path

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Paper elevation={3} sx={{ padding: 4, textAlign: 'center', borderRadius: '12px' }}>
        <div><div  style={{cursor: 'pointer'}}><i   role="img" style={{backgroundImage: "url('https://static.cdninstagram.com/rsrc.php/v3/yS/r/ajlEU-wEDyo.png&quot')", backgroundPosition: '0px -52px', backgroundSize: 'auto', width: '175px', height: '51px', backgroundRepeat: 'no-repeat', display: 'inline-block'}}></i></div></div>
          <TextField label="Phone number, username, or email" fullWidth margin="normal" />
          <TextField label="Password" type="password" fullWidth margin="normal" />
          <Button variant="contained" color="primary" fullWidth>
            Log In
          </Button>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Forgot password?
          </Typography>
        </Paper>
        <Paper elevation={3} sx={{ padding: 2, textAlign: 'center', marginTop: '1rem', borderRadius: '12px' }}>
          <Typography variant="body2">
            Don't have an account? <a href="#">Sign up</a>
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App;
